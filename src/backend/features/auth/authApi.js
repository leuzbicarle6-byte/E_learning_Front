import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "../../baseQuery";
import { ENDPOINTS } from "../../endpoints";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: baseQueryWithReauth,

  // 1. Déclaration du tag
  tagTypes: ["User"],

  endpoints: (builder) => ({
    // Récupérer le profil (Ajouté pour exploiter le système de tags)
    getUserProfile: builder.query({
      query: () => ({
        url: ENDPOINTS.auth.userProfile, // Exemple: /auth/me/ ou /auth/user/
        method: "GET",
      }),
      // 2. Ce endpoint fournit le tag "User" et garde le résultat en cache
      providesTags: ["User"],
    }),

    register: builder.mutation({
      query: (data) => ({
        url: ENDPOINTS.auth.register,
        method: "POST",
        body: data,
      }),
    }),

    login: builder.mutation({
      query: (credentials) => ({
        url: ENDPOINTS.auth.login,
        method: "POST",
        body: credentials,
      }),
      // 3. Invalide le cache précédent au cas où un ancien profil traînait
      invalidatesTags: ["User"],
    }),

    refreshToken: builder.mutation({
      query: ({ refresh }) => ({
        url: ENDPOINTS.auth.refresh,
        method: "POST",
        body: { refresh },
      }),
    }),

    logout: builder.mutation({
      query: (data) => ({
        url: ENDPOINTS.auth.logout,
        method: "POST",
        body: data,
      }),
      // 4. Force RTK Query à vider/invalider les données du profil à la déconnexion
      invalidatesTags: ["User"],
    }),

    changePassword: builder.mutation({
      query: (passwords) => ({
        url: ENDPOINTS.password.change,
        method: "PUT",
        body: passwords,
      }),
      // Optionnel : force à recharger le profil si le backend change des infos lors du switch
      invalidatesTags: ["User"],
    }),

    forgotPassword: builder.mutation({
      query: (data) => ({
        url: ENDPOINTS.password.requestReset,
        method: "POST",
        body: data,
      }),
    }),

    confirmPasswordReset: builder.mutation({
      query: ({ uidb64, token, ...data }) => ({
        url: ENDPOINTS.password.resetConfirm(uidb64, token),
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  // == Mes Query ==
  useGetUserProfileQuery,

  // == Mes mutations ==
  useRegisterMutation,
  useLoginMutation,
  useRefreshTokenMutation,
  useLogoutMutation,
  useChangePasswordMutation,
  useForgotPasswordMutation,
  useConfirmPasswordResetMutation,
} = authApi;
