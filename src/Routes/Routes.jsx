import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Pages/Home/Home";
import Menu from "../Components/Pages/Menu/Menu";
import Order from "../Components/Pages/Order/Order";


const routes = createBrowserRouter([
    {
        path:"/",
        element: <Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/menu",
                element:<Menu></Menu>
            },
            {
                path:"/order",
                element:<Order></Order>
            }
        ]
    }
])

export default routes;