import { AppRoutes } from "./privateRoutes/AppRoutes";
import { authRoutes } from "./AuthRoutes.jsx";

export const allRoutes = [...authRoutes, ...AppRoutes];
