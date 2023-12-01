import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/home/index.jsx";
import About from "../pages/about/index.jsx";
import MainLayout from "../layouts/main/index.jsx";

const routes = createBrowserRouter([
    {
        path: "/",
        element :  <MainLayout/>,
        children : [
            {
              index: true,
              element: <Home />,
            },
            {
                path: "/hakkimizda",
                element : <About/>,
            },
            {
                path: "/restaurants",
                element : "Restaurants",
            },
            {
                path: "/orders",
                element : "Orders",
            },
            {
                path: "/profile/:username",
                element : "Profile",
            },
            {
                path: "*",
                element : "404",
            }

        ]
    },

])


export default routes