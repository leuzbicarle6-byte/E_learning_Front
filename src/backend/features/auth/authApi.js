import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "../../baseQuery";
import { ENDPOINTS } from "../../endpoints"; // Correction de l'orthographe et utilisation de l'objet global

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    // Inscription
    register: builder.mutation({
      query: (data) => ({
        url: ENDPOINTS.auth.register, // Fini la concaténation, on pioche directement
        method: "POST",
        body: data,
      }),
    }),

    // Connexion
    login: builder.mutation({
      query: (credentials) => ({
        url: ENDPOINTS.auth.login,
        method: "POST",
        body: credentials,
      }),
    }),

    // Rafraîchissement du Token JWT
    refreshToken: builder.mutation({
      query: ({ refresh }) => ({
        url: ENDPOINTS.auth.refresh,
        method: "POST",
        body: { refresh },
      }),
    }),

    // Déconnexion (Blacklist du refresh token côté Django)
    logout: builder.mutation({
      query: (data) => ({
        url: ENDPOINTS.auth.logout,
        method: "POST",
        body: data, // Attend généralement { refresh: "votre_token" }
      }),
    }),

    // Changement de mot de passe (Utilisateur connecté)
    changePassword: builder.mutation({
      query: (passwords) => ({
        url: ENDPOINTS.password.change, // Aligné sur /password/change/ de Django
        method: "PUT",
        body: passwords,
      }),
    }),

    // Demande de réinitialisation (Mot de passe oublié)
    forgotPassword: builder.mutation({
      query: (data) => ({
        url: ENDPOINTS.password.requestReset, // Aligné sur /password/request-reset/
        method: "POST",
        body: data, // { email }
      }),
    }),

    // Confirmation de la réinitialisation (Via le lien reçu par email)
    confirmPasswordReset: builder.mutation({
      query: ({ uidb64, token, ...data }) => ({
        // On utilise la fonction fléchée dynamique définie dans nos ENDPOINTS
        url: ENDPOINTS.password.resetConfirm(uidb64, token),
        method: "POST",
        body: data, // Contient le { password } (et le password_confirm si géré)
      }),
    }),
  }),
});

// Export des hooks magiques de RTK Query
export const {
  useRegisterMutation,
  useLoginMutation,
  useRefreshTokenMutation,
  useLogoutMutation,
  useChangePasswordMutation,
  useForgotPasswordMutation,
  useConfirmPasswordResetMutation,
} = authApi;
