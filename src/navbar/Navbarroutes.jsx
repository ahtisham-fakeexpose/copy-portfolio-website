import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import ServicesDetails from "./pages/services/servicesDetails/ServicesDetails";
import Blog from "./pages/blog/Blog";
import Blogclassic from "./pages/blog/blogclassic/Blogclassic";
import BlogDetails from "./pages/blog/blogdetails/BlogDetails";
import Project from "./pages/project/Project";
import Projectdetails from "./pages/project/projectdetails/Projectdetails";
import Contact from "./pages/contact/Contact";

export default function Navbarroutes() {
    const route = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                { index: true, element: <Home /> },
                { path: "about", element: <About /> },
                { path: "services", element: <Services /> },
                { path: "services/servicesdetails", element: <ServicesDetails /> },
                { path: "blog", element: <Blog /> },
                { path: "blog/blogclassic", element: <Blogclassic /> },
                { path: "blog/blogdetails", element: <BlogDetails /> },
                 { path: "project", element: <Project /> },
                { path: "project/projectdetails", element: <Projectdetails /> },
                { path: "contact", element: <Contact /> },
            ]
        }
    ]);

    return <RouterProvider router={route} />;
}