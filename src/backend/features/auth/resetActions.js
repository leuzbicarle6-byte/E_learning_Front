import { logout } from "./authSlice";
import { authApi } from "./authApi";
import { userApi } from "../user/userApi";
import { coursesApi } from "../courses/coursesApi"; // Ajuste le chemin si besoin
import { exercicesApi } from "../exercice/exerciceApi";

export const resetApp = () => (dispatch) => {
  dispatch(logout());
  dispatch(authApi.util.resetApiState());
  dispatch(userApi.util.resetApiState());
  dispatch(coursesApi.util.resetApiState());
  dispatch(exercicesApi.util.resetApiState());
};
