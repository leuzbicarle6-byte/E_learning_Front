import { createSlice } from "@reduxjs/toolkit";

// Fonction utilitaire pour tenter de récupérer ce qui est stocké
const getStoredAuth = () => {
  try {
    const access = localStorage.getItem("accessToken");
    const refresh = localStorage.getItem("refreshToken");
    const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;
    
    if (access && refresh) {
      return { user, accessToken: access, refreshToken: refresh, role: user?.role || null };
    }
  } catch (error) {
    console.error("Erreur lors de la récupération du localStorage", error);
  }
  return null;
};

const storedAuth = getStoredAuth();

const initialState = {
  user: storedAuth?.user || null,
  accessToken: storedAuth?.accessToken || null,
  refreshToken: storedAuth?.refreshToken || null,
  role: storedAuth?.role || null,
  isHydrated: !!storedAuth, // passe à true si on a pu restaurer une session
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, { payload }) => {
      state.user = payload.user;
      state.accessToken = payload.access;
      state.refreshToken = payload.refresh;
      state.role = payload.user?.role || null;
      state.isHydrated = true;

      // Sauvegarde automatique dans le localStorage pour le prochain F5
      localStorage.setItem("accessToken", payload.access);
      localStorage.setItem("refreshToken", payload.refresh);
      if (payload.user) {
        localStorage.setItem("user", JSON.stringify(payload.user));
      }
    },

    logout: (state) => {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
      state.role = null;
      state.isHydrated = false;

      // Nettoyage complet pour éviter les fuites de données
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("user");
    },

    setHydrated: (state) => {
      state.isHydrated = true;
    },
  },
});

export const { setCredentials, logout, setHydrated } = authSlice.actions;

// Selectors utiles pour tes composants React (Optionnel mais recommandé)
export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.accessToken;
export const selectIsAuthenticated = (state) => !!state.auth.accessToken;

export default authSlice.reducer;