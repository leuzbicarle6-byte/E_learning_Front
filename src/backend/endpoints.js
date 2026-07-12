import { logout } from "./features/auth/authSlice";

// ========================================
// Base URL Django API
// ========================================

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:8000/api";

// ========================================
// API ROOTS
// ========================================

const USERS_ROOT = `${API_BASE_URL}/users/`;
const PROFILE_ROOT = `${API_BASE_URL}/users/`;
const PASSWORD_ROOT = `${API_BASE_URL}/users/`;
const COURSES_ROOT = `${API_BASE_URL}/courses/`;
const PAYMENTS_ROOT = `${API_BASE_URL}/payments/`;
const EXERCICES_ROOT = `${API_BASE_URL}/exos/`;
const NOTIFICATIONS_ROOT = `${API_BASE_URL}/notifs/`;

// ========================================
// ENDPOINTS
// ========================================

export const ENDPOINTS = {
  // ========================================
  // AUTH
  // ========================================

  auth: {
    login: `${USERS_ROOT}login/`,
    register: `${USERS_ROOT}register/`,
    logout: `${USERS_ROOT}logout/`,
    refresh: `${USERS_ROOT}token/refresh/`,
  },

  // ========================================
  // PROFILE
  // ========================================

  profile: {
    get: `${PROFILE_ROOT}profile/`,
    getById: (id) => `${PROFILE_ROOT}profile/${id}/`,
    update: `${PROFILE_ROOT}update/profile/`,
    delete: `${PROFILE_ROOT}delete/`,
  },

  // ========
  // Admin
  // ========
  admin: {
    users: `${USERS_ROOT}admin/`, // <-- Ajoute cette ligne si elle manque
    count_users: `${USERS_ROOT}stats/users/`,
  },

  // ========================================
  // PASSWORD
  // ========================================

  password: {
    change: `${PASSWORD_ROOT}change-password/`,

    requestReset: `${PASSWORD_ROOT}password/request-reset/`,

    resetConfirm: (uid, token) =>
      `${PASSWORD_ROOT}password/reset-confirm/${uid}/${token}/`,
  },

  // ========================================
  // COURSES (🌟 Remplacement de slug par id)
  // ========================================

  courses: {
    list: `${COURSES_ROOT}`,
    create: `${COURSES_ROOT}`,
    count: `${COURSES_ROOT}count/courses/`,
    coursTab: `${COURSES_ROOT}tabs/`,
    // Correction de la ligne dans tes ENDPOINTS :
    meStats: (id) =>
      id ? `${COURSES_ROOT}me/stats/?id=${id}` : `${COURSES_ROOT}me/stats/`,

    detail: (id) => `${COURSES_ROOT}${id}/`,
    update: (id) => `${COURSES_ROOT}${id}/`,
    delete: (id) => `${COURSES_ROOT}${id}/`,
    progress: (id) => `${COURSES_ROOT}${id}/progress/`,
    quiz: (id) => `${COURSES_ROOT}${id}/quiz/`,
  },

  // ========================================
  // PAYMENTS
  // ========================================
  payments: {
    buyCourse: (courseId) => `${PAYMENTS_ROOT}courses/${courseId}/buy/`,
  },

  // ===========
  // Exercice
  // ===========
  exercice: {
    // ÉTUDIANT & GLOBAL
    list: `${EXERCICES_ROOT}exercices/`, // GET : Liste tous les modules et exercices
    allSubmissions: `${EXERCICES_ROOT}exercices/all-submissions/`,
    detail: (id) => `${EXERCICES_ROOT}exercices/${id}/`, // GET : Récupère un module spécifique
    updateStatus: `${EXERCICES_ROOT}exercices/update-status/`, // POST : Met à jour la progression de l'étudiant

    // ENSEIGNANT / ADMIN (Gestion du catalogue)
    create: `${EXERCICES_ROOT}exercices/`, // POST : Crée un nouveau module/exercice
    update: (id) => `${EXERCICES_ROOT}exercices/${id}/`, // PUT/PATCH : Modifie un module/exercice existant
    delete: (id) => `${EXERCICES_ROOT}exercices/${id}/`, // DELETE : Supprime un module/exercice
  },

  // ========================================
  // Notifications
  // ========================================
  notif: {
    list: `${NOTIFICATIONS_ROOT}notifications/`,
    marked_read: (id) => `${NOTIFICATIONS_ROOT}notifications/${id}/mark-read/`,
  },
};

// ========================================
// EXPORTS
// ========================================

export const USERS_API = USERS_ROOT;
export const COURSES_API = COURSES_ROOT;

export default ENDPOINTS;
