import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "../../baseQuery";
import { ENDPOINTS } from "../../endpoints"; 

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: baseQueryWithReauth,
  // Ajout de "Users" dans les tagTypes pour gérer le cache du tableau admin
  tagTypes: ["UserProfile", "Users"],
  endpoints: (builder) => ({
    
    // ==========================================
    //          PROFIL UTILISATEUR (USER)
    // ==========================================

    // Récupérer le profil de l'utilisateur connecté
    getUserProfile: builder.query({
      query: () => ({
        url: ENDPOINTS.profile.get, 
        method: "GET",
      }),
      providesTags: ["UserProfile"],
    }),

    // Récupérer un profil par son ID
    getProfileUserById: builder.query({
      query: (id) => ({
        url: ENDPOINTS.profile.getById(id), 
        method: "GET",
      }),
      providesTags: (result, error, id) => [{ type: "UserProfile", id }],
    }),

    // Mettre à jour le profil
    updateUserProfile: builder.mutation({
      query: (profileData) => ({
        url: ENDPOINTS.profile.update, 
        method: "PUT", 
        body: profileData,
      }),
      invalidatesTags: ["UserProfile"],
    }),

    // Supprimer son propre compte
    deleteUserAccount: builder.mutation({
      query: (password) => ({
        url: ENDPOINTS.profile.delete, 
        method: "DELETE",
        body: { password },
      }),
    }),

    // ==========================================
    //        FONCTIONS D'ADMINISTRATION (ADMIN)
    // ==========================================

    // 1. Récupérer tous les utilisateurs (supporte la pagination)
    getAllUsers: builder.query({
      query: (page = 1) => ({
        url: `${ENDPOINTS.admin.users}?page=${page}`, // S'aligne sur : users/admin/?page=X
        method: "GET",
      }),
      providesTags: ["Users"],
    }),

    // 2. Activer / Désactiver un compte utilisateur (PATCH)
    updateToggleUser: builder.mutation({
      query: ({ id, is_active }) => ({
        url: ENDPOINTS.admin.users, // S'aligne sur : users/admin/
        method: "PATCH",
        body: { id, is_active },
      }),
      invalidatesTags: ["Users"], // Recharge le tableau admin automatiquement
    }),

    // 3. Supprimer définitivement un utilisateur (DELETE)
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `${ENDPOINTS.admin.users}?id=${id}`, // S'aligne sur : users/admin/?id=X
        method: "DELETE",
      }),
      invalidatesTags: ["Users"], // Supprime la ligne du tableau automatiquement
    }),
    
  }),
});

// Export de TOUS les hooks générés automatiquement par RTK Query
export const { 
  useGetUserProfileQuery, 
  useGetProfileUserByIdQuery, 
  useUpdateUserProfileMutation, 
  useDeleteUserAccountMutation,
  // Nouveaux hooks Admin :
  useGetAllUsersQuery,
  useUpdateToggleUserMutation,
  useDeleteUserMutation
} = userApi;