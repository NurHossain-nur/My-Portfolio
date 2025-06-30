import { createBrowserRouter } from "react-router";
// import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayout";
import About from "../pages/About/About";
import HomeLayout from "../layouts/HomeLayout";
import ProjectDetails from "../pages/ProjectDetails/ProjectDetails";
import Projects from "../pages/Projects/Projects";
import Contact from "../pages/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        Component: HomeLayout,
      },
      {
        path: "/about",
        Component: About
      },
      {
        path: "/projects",
        Component: Projects,
      },
      {
        path: "/contact",
        Component: Contact
      },
      {
        path: "/projects/:id",
        Component: ProjectDetails
      }
    ]
    
  },
]);

export default router;