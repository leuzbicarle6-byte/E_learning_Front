import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "../../baseQuery";
import { ENDPOINTS } from "../../endpoints"; // Correction de l'orthographe "endpoints" et utilisation de l'objet complet

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["UserProfile"],
  endpoints: (builder) => ({
    
    // Récupérer le profil de l'utilisateur connecté
    getUserProfile: builder.query({
      query: () => ({
        url: ENDPOINTS.profile.get, // Utilise la route centrale : `${API_BASE_URL}/profile/`
        method: "GET",
      }),
      providesTags: ["UserProfile"],
    }),

    // Récupérer un profil par son ID
    getProfileUserById: builder.query({
      query: (id) => ({
        url: ENDPOINTS.profile.getById(id), // Utilise la fonction fléchée : `${API_BASE_URL}/profile/${id}/`
        method: "GET",
      }),
      // On lie le tag à l'ID spécifique pour éviter de tout invalider inutilement en cache
      providesTags: (result, error, id) => [{ type: "UserProfile", id }],
    }),

    // Mettre à jour le profil
    updateUserProfile: builder.mutation({
      query: (profileData) => ({
        url: ENDPOINTS.profile.update, // Correspond à : `${API_BASE_URL}/profile/update/`
        method: "PUT", // Ou "PATCH" selon ce que ton Django attend
        body: profileData,
      }),
      // Invalide à la fois le profil global et potentiellement celui par ID si tu veux être d'une précision chirurgicale
      invalidatesTags: ["UserProfile"],
    }),

    // Supprimer le compte
    deleteUserAccount: builder.mutation({
      query: (password) => ({
        url: ENDPOINTS.profile.delete, // Correspond à : `${API_BASE_URL}/profile/delete/`
        method: "DELETE",
        body: { password },
      }),
      // Optionnel : tu peux invalider le tag ici si nécessaire, bien que le user va être déconnecté juste après
    }),
    
  }),
});

// Export des hooks générés automatiquement par RTK Query
export const { 
  useGetUserProfileQuery, 
  useGetProfileUserByIdQuery, 
  useUpdateUserProfileMutation, 
  useDeleteUserAccountMutation 
} = userApi;