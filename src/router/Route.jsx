import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/home";
import Favourite from "../pages/Favourite/Favourite";
import MainLayout from "../layout/MainLayout";
import Login from "../pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/favourite",
        element: <Favourite></Favourite>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
