import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Coffees from "../pages/Coffees";
import CoffeeCard from "../components/CoffeeCard/CoffeeCard";
const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element:<Home></Home>,
                loader:()=>fetch('../categories.json'),
                children:[
                    {
                       path:"/category/:cat",
                       element:<CoffeeCard></CoffeeCard>
                    }
                ]
            },
            {
                path:"/dashboard",
                element:<Dashboard></Dashboard>
            },
            {
                path:"/coffees",
                element:<Coffees></Coffees>
            }
        ]
    },
]);

export default router;