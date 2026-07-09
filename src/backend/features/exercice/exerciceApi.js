import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "../../baseQuery";
import ENDPOINTS from "../../endpoints";

export const exercicesApi = createApi({
  reducerPath: "exercicesApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["Exercice"],

  endpoints: (builder) => ({
    // 1. LISTER TOUT (Modules & Exercices + Statuts étudiants)
    getExercices: builder.query({
      query: () => ENDPOINTS.exercice.list,
      providesTags: ["Exercice"],
    }),

    // 2. RÉCUPÉRER UN MODULE SPÉCIFIQUE
    getExerciceDetail: builder.query({
      query: (id) => ENDPOINTS.exercice.detail(id),
      providesTags: (result, error, id) => [{ type: "Exercice", id }],
    }),

    // 3. ÉTUDIANT : METTRE À JOUR LE STATUT (not_started -> in_progress -> pending)
    updateExerciseStatus: builder.mutation({
      query: (data) => ({
        url: ENDPOINTS.exercice.updateStatus,
        method: "POST",
        body: data, // Attend { exercise_id: X, status: "pending" }
      }),
      invalidatesTags: ["Exercice"],
    }),

    // 4. ADMIN : CRÉER UN MODULE OU EXERCICE
    createExercice: builder.mutation({
      query: (newExercice) => ({
        url: ENDPOINTS.exercice.create,
        method: "POST",
        body: newExercice,
      }),
      invalidatesTags: ["Exercice"],
    }),

    // 5. ADMIN : MODIFIER UN MODULE OU EXERCICE
    updateExercice: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: ENDPOINTS.exercice.update(id),
        method: "PATCH", // Utilisation de PATCH pour des modifications partielles
        body: rest,
      }),
      invalidatesTags: (result, error, { id }) => [
        "Exercice",
        { type: "Exercice", id },
      ],
    }),

    // 6. ADMIN : SUPPRIMER UN MODULE OU EXERCICE
    deleteExercice: builder.mutation({
      query: (id) => ({
        url: ENDPOINTS.exercice.delete(id),
        method: "DELETE",
      }),
      invalidatesTags: ["Exercice"],
    }),

    // 7. ADMIN : LISTES DES ATTENTES
    getAllSubmissions: builder.query({
      query: () => ENDPOINTS.exercice.allSubmissions, // ou "exercices/all-submissions/"
      providesTags: ["Exercice"],
    }),
  }),
});

// Exportation des Hooks générés automatiquement par RTK Query
export const {
  useGetExercicesQuery,
  useGetExerciceDetailQuery,
  useUpdateExerciseStatusMutation,
  useCreateExerciceMutation,
  useUpdateExerciceMutation,
  useDeleteExerciceMutation,
  useGetAllSubmissionsQuery,
} = exercicesApi;
