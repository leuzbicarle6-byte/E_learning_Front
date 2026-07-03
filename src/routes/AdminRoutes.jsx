import DashboardA from "../pages/admin/DashboardA";
import ListeUsers from "../pages/admin/ListeUsers";

const AdminRoutes = [
  { path: "dashboard", element: <DashboardA /> },
  { path: "users/liste", element: <ListeUsers /> },
];

export default AdminRoutes;
