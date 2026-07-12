import { createApi } from "@reduxjs/toolkit/query/react";

import { baseQueryWithReauth } from "../../baseQuery";
import { ENDPOINTS } from "../../endpoints";

export const coursesApi = createApi({
  reducerPath: "coursesApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["Courses", "Course", "CourseQuiz"],

  endpoints: (builder) => ({
    // ========================================
    // GET ALL COURSES
    // ========================================

    getCoursesCount: builder.query({
      query: () => ({
        url: ENDPOINTS.courses.count,
        method: "GET",
      }),
      providesTags: ["Courses"],
    }),

    getCourses: builder.query({
      query: () => ({
        url: ENDPOINTS.courses.list,
        method: "GET",
      }),
      providesTags: ["Courses"],
    }),

    getCoursesTabs: builder.query({
      query: () => ({
        url: ENDPOINTS.courses.coursTab,
        method: "GET",
      }),
      providesTags: ["Courses"],
    }),

    // ========================================
    // GET COURSE DETAIL (🌟 Changé : Slug -> Id)
    // ========================================

    getCourseById: builder.query({
      query: (id) => ({
        url: ENDPOINTS.courses.detail(id),
        method: "GET",
      }),
      providesTags: (result, error, id) => [{ type: "Course", id }],
    }),

    // ========================================
    // CREATE COURSE
    // ========================================

    createCourse: builder.mutation({
      query: (courseData) => ({
        url: ENDPOINTS.courses.create,
        method: "POST",
        body: courseData,
      }),
      invalidatesTags: ["Courses"],
    }),

    // ========================================
    // UPDATE COURSE (🌟 Changé : Slug -> Id)
    // ========================================

    updateCourse: builder.mutation({
      query: ({ id, data }) => ({
        url: ENDPOINTS.courses.update(id),
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [
        "Courses",
        { type: "Course", id: id },
      ],
    }),

    // ========================================
    // PATCH COURSE (🌟 Changé : Slug -> Id)
    // ========================================

    patchCourse: builder.mutation({
      query: ({ id, data }) => ({
        url: ENDPOINTS.courses.update(id),
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [
        "Courses",
        { type: "Course", id: id },
      ],
    }),

    // ========================================
    // DELETE COURSE (🌟 Changé : Slug -> Id)
    // ========================================

    deleteCourse: builder.mutation({
      query: (id) => ({
        url: ENDPOINTS.courses.delete(id),
        method: "DELETE",
      }),
      invalidatesTags: ["Courses"],
    }),

    // ========================================
    // COMPLETE COURSE (🌟 Changé : Slug -> Id)
    // ========================================

    completeCourse: builder.mutation({
      query: ({ id, progress_percentage }) => ({
        url: ENDPOINTS.courses.progress(id),
        method: "PATCH",
        body: {
          progress_percentage,
        },
      }),
      invalidatesTags: (result, error, { id }) => [
        "Courses",
        { type: "Course", id: id },
      ],
    }),

    // ========================================
    // QUIZ FEATURES (🌟 Changé : Slug -> Id)
    // ========================================

    getQuizQuestions: builder.query({
      query: (id) => ({
        url: ENDPOINTS.courses.quiz(id),
        method: "GET",
      }),
      providesTags: (result, error, id) => [{ type: "CourseQuiz", id }],
    }),

    submitQuizAnswers: builder.mutation({
      query: ({ id, answers }) => ({
        url: ENDPOINTS.courses.quiz(id),
        method: "POST",
        body: {
          answers,
        },
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "Course", id: id },
        "Courses",
      ],
    }),

    // =========================
    // Nombre de cours terminer
    // =========================
    getMeStats: builder.query({
      query: (id) => ({
        url: ENDPOINTS.courses.meStats(id),
        method: "GET",
      }),
      providesTags: ["Courses"],
    }),

    // ========================================
    // INITIALIZE PAYDUNYA PAYMENT (Achat Cours)
    // ========================================

    buyCourse: builder.mutation({
      query: (id) => ({
        url: ENDPOINTS.payments.buyCourse(id),
        method: "POST",
      }),
      // On invalide le détail de ce cours pour forcer le rafraîchissement du statut d'accès
      invalidatesTags: (result, error, id) => [{ type: "Course", id }],
    }),

    //----------- Terminer -------------//
  }),
});

// ========================================
// EXPORT HOOKS
// ========================================

export const {
  // Queries
  useGetCoursesCountQuery,
  useGetCoursesQuery,
  useGetCoursesTabsQuery,
  useGetCourseByIdQuery,
  useGetQuizQuestionsQuery,
  useGetMeStatsQuery,

  // Mutations
  useCreateCourseMutation,
  useUpdateCourseMutation,
  usePatchCourseMutation,
  useDeleteCourseMutation,
  useCompleteCourseMutation,
  useSubmitQuizAnswersMutation,
  useBuyCourseMutation, // 🌟 Nouveau Hook généré pour ton bouton d'achat !
} = coursesApi;
