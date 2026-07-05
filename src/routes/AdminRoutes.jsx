import AddCours from "../pages/admin/AddCours";
import AllCourses from "../pages/admin/AllCourses";
import DashboardA from "../pages/admin/DashboardA";
import DetailsCours from "../pages/admin/DetailsCours";
import EditCours from "../pages/admin/EditCours";
import ListeUsers from "../pages/admin/ListeUsers";
import Profile from "../pages/admin/Profile";
import UserDetails from "../pages/admin/UserDetails";

const AdminRoutes = [
  { path: "dashboard", element: <DashboardA /> },
  { path: "users", element: <ListeUsers /> },
  { path: "profile", element: <Profile /> },
  { path: "courses", element: <AllCourses /> },
  { path: "courses/create", element: <AddCours /> },
  { path: "courses/details/:id", element: <DetailsCours /> },
  { path: "courses/edit/:id", element: <EditCours /> },
  { path: "detail/user/:id", element: <UserDetails /> },
];

export default AdminRoutes;
