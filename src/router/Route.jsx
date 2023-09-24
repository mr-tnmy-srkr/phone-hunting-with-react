import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/home";
import Favourite from "../pages/Favourite/Favourite";
import MainLayout from "../layout/MainLayout";
import Login from "../pages/Login/Login";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Phone from "../pages/Phone/Phone";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        // loader: () => fetch("phones.json"),
      },
      {
        path: "/favourite",
        element: <Favourite></Favourite>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/phones/:id",
        element: <Phone></Phone>,
        loader: () => fetch("/phones.json"),
      },
    ],
  },
]);

export default router;
