import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logout, setCredentials } from "./features/auth/authSlice";
import { ENDPOINTS } from "./endpoints"; // Utilisation de notre fichier centralisé

// 1. Configuration de la baseQuery principale
const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL || "http://localhost:8000", // Enlève /api d'ici si tes ENDPOINTS ont des racines différentes (auth/, profile/)
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.accessToken;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

// 2. Intercepteur pour gérer le rafraîchissement automatique des tokens
export const baseQueryWithReauth = async (args, api, extraOptions) => {
  // Évite d'intercepter les 401 si la requête en cours est déjà une tentative de refresh
  const isRefreshRequest = typeof args === 'object' && args.url === ENDPOINTS.auth.refresh;

  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401 && !isRefreshRequest) {
    const state = api.getState().auth;
    const refreshToken = state.refreshToken;
    const currentUser = state.user; // On récupère l'utilisateur actuel pour ne pas le perdre

    if (!refreshToken) {
      api.dispatch(logout());
      return result;
    }

    // Tentative de rafraîchissement du token
    const refreshResult = await baseQuery(
      {
        url: ENDPOINTS.auth.refresh, // Utilise la route propre '/auth/token/refresh/'
        method: "POST",
        body: { refresh: refreshToken },
      },
      api,
      extraOptions
    )

    if (refreshResult.data) {
      const newAccess = refreshResult.data.access;
      
      // FIX : On passe les clés EXACTES attendues par le authSlice payload
      api.dispatch(
        setCredentials({ 
          user: currentUser, // On réinjecte le user actuel pour éviter qu'il passe à null
          access: newAccess, 
          refresh: refreshToken 
        })
      );

      // On rejoue la requête initiale qui avait échoué avec le nouveau token
      result = await baseQuery(args, api, extraOptions);
    } else {
      // Si le refresh token est expiré ou invalide, déconnexion immédiate
      api.dispatch(logout());
    }
  }

  return result;
};