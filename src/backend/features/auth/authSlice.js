import { createSlice } from "@reduxjs/toolkit";

// Fonction utilitaire pour tenter de récupérer ce qui est stocké
const getStoredAuth = () => {
  try {
    const access = localStorage.getItem("accessToken");
    const refresh = localStorage.getItem("refreshToken");
    const user = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null;

    if (access && refresh) {
      return {
        user,
        accessToken: access,
        refreshToken: refresh,
        role: user?.role || null,
      };
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
  isHydrated: !!storedAuth, // Passe à true si on a pu restaurer une session
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, { payload }) => {
      // On s'aligne sur ce que renvoie ton backend (payload.access et payload.refresh)
      state.user = payload.user;
      state.accessToken = payload.access || payload.accessToken; // Gère les deux cas au cas où
      state.refreshToken = payload.refresh || payload.refreshToken;
      state.role = payload.user?.role || null;
      state.isHydrated = true;

      // Sauvegarde automatique et sécurisée dans le localStorage
      try {
        localStorage.setItem("accessToken", payload.access);
        localStorage.setItem("refreshToken", payload.refresh);
        if (payload.user) {
          localStorage.setItem("user", JSON.stringify(payload.user));
        }
      } catch (error) {
        console.error("Impossible d'écrire dans le localStorage", error);
      }
    },

    logout: (state) => {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
      state.role = null;
      state.isHydrated = false;

      // Nettoyage complet et sécurisé
      try {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("user");
      } catch (error) {
        console.error("Impossible de nettoyer le localStorage", error);
      }
    },

    setHydrated: (state) => {
      state.isHydrated = true;
    },
  },
});

export const { setCredentials, logout, setHydrated } = authSlice.actions;

// Selectors
export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.accessToken;
export const selectCurrentRefreshToken = (state) => state.auth.refreshToken;
export const selectIsAuthenticated = (state) => !!state.auth.accessToken;

export default authSlice.reducer;
