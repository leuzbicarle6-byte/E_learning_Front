// services/notificationApi.js
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "../../baseQuery";
import ENDPOINTS from "../../endpoints";

export const notificationApi = createApi({
  reducerPath: "notificationApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["Notification"],
  endpoints: (builder) => ({
    // Obtenir les notifications de l'utilisateur connecté
    getNotifications: builder.query({
      query: () => ENDPOINTS.notif.list,
      providesTags: ["Notification"],
    }),
    // Marquer une notification comme lue
    markAsRead: builder.mutation({
      query: (id) => ({
        url: ENDPOINTS.notif.marked_read(id),
        method: "POST",
      }),
      invalidatesTags: ["Notification"],
    }),
  }),
});

export const { useGetNotificationsQuery, useMarkAsReadMutation } =
  notificationApi;
