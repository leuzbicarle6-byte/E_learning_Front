import { authApi } from "./authApi";
import { userApi } from "../user/userApi";
import { coursesApi } from "../courses/coursesAPI"; // Ajuste le chemin si besoin
import { logout } from "./authSlice";

export const resetApp = () => (dispatch) => {
  dispatch(logout());
  dispatch(authApi.util.resetApiState());
  dispatch(userApi.util.resetApiState());
  dispatch(coursesApi.util.resetApiState());
};
