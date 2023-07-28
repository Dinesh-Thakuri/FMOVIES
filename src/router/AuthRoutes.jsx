import Login from "../Pages/Login";

export const authRoutes = [
  {
    id: "Login",
    path: "/Login",
    element: Login,
    hasLayout: true,
    isPrivate: false,
  },
];
