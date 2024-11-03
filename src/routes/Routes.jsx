import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Coffees from "../pages/Coffees";
import CoffeeCard from "../components/CoffeeCard/CoffeeCard";
import CoffeeDetails from "../pages/CoffeeDetails";
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
                        path:"/",
                        element:<CoffeeCard></CoffeeCard>,
                        loader:()=>fetch('../coffees.json'),
                     },
                    {
                       path:"/category/:cat",
                       element:<CoffeeCard></CoffeeCard>,
                       loader:()=>fetch('../coffees.json'),
                    }
                ]
            },
            {
                path:"/dashboard",
                element:<Dashboard></Dashboard>
            },
            {
                path:"/coffees",
                element:<Coffees></Coffees>,
                loader:()=>fetch('../coffees.json'),
            },
            {
                path:"/coffee/:id",
                element:<CoffeeDetails></CoffeeDetails>,
                loader:()=>fetch('../coffees.json'),
            }
        ]
    },
]);

export default router;