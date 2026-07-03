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
    getById: (id) => `${PROFILE_ROOT}${id}/`,
    update: `${PROFILE_ROOT}update/`,
    delete: `${PROFILE_ROOT}delete/`,
  },

  // ========================================
  // PASSWORD
  // ========================================

  password: {
    change: `${PASSWORD_ROOT}change/`,

    requestReset: `${PASSWORD_ROOT}request-reset/`,

    resetConfirm: (uidb64, token) =>
      `${PASSWORD_ROOT}reset-confirm/${uidb64}/${token}/`,
  },

  // ========================================
  // COURSES (🌟 Remplacement de slug par id)
  // ========================================

  courses: {
    list: `${COURSES_ROOT}`,
    create: `${COURSES_ROOT}`,

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
};

// ========================================
// EXPORTS
// ========================================

export const USERS_API = USERS_ROOT;
export const COURSES_API = COURSES_ROOT;

export default ENDPOINTS;
