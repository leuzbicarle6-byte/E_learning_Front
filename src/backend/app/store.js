import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import { authApi } from "../features/auth/authApi";
import { userApi } from "../features/user/userApi";
import { coursesApi } from "../features/courses/coursesApi";

export const store = configureStore({
  reducer: {
    auth: authReducer, // S'hydrate tout seul via le localStorage dans son propre slice
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [coursesApi.reducerPath]: coursesApi.reducer,
  },

  // On injecte les middlewares de RTK Query pour le cache et les requêtes
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      userApi.middleware,
      coursesApi.middleware,
    ),

  // Version propre pour Vite (pas de crash avec process.env)
  devTools: import.meta.env.DEV,
});
