import Category from "../../Pages/Category";
import Home from "../../Pages/Home";

export const AppRoutes = [
  {
    id: "home",
    path: "/",
    element: Home,
    hasLayout: true,
    isPrivate: true,
  },
  {
    id: "category",
    path: "/Category",
    element: Category,
    hasLayout: true,
    isPrivate: true,
  },
];
