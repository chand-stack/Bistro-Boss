import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Pages/Home/Home";
import Menu from "../Components/Pages/Menu/Menu";
import Order from "../Components/Pages/Order/Order";
import Login from "../Components/Pages/Login/Login";
import Register from "../Components/Pages/Register/Register";
import DashBoard from "../Layout/DashBoard";
import Cart from "../Components/Pages/DashBoard/Cart";
import Users from "../Components/Pages/DashBoard/Users";
import AdminRoute from "../Private/AdminRoute";
import Additem from "../Components/Pages/DashBoard/Additem";
import ManageItem from "../Components/Pages/DashBoard/ManageItem";
import UpdateItem from "../Components/Pages/DashBoard/UpdateItem";
import Payment from "../Components/Pages/DashBoard/Payment";
import UserHome from "../Components/Pages/DashBoard/UserHome";
import AdminHome from "../Components/Pages/DashBoard/AdminHome";


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
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            }
        ]
    },
    {
        path:"dashBoard",
        element:<DashBoard></DashBoard>,
        children:[
            {
                path:"cart",
                element:<Cart></Cart>
            },
            {
                path: "userhome",
                element:<UserHome></UserHome>
            },
            {
                path:"adminhome",
                element:<AdminRoute><AdminHome></AdminHome></AdminRoute>
            },
            {
                path:"payment",
                element:<Payment></Payment>
            },
            {
                path:"users",
                element:<AdminRoute><Users></Users></AdminRoute>
            },
            {
                path:"additem",
                element:<AdminRoute><Additem></Additem></AdminRoute>
            },
            {
                path:"manageitem",
                element:<ManageItem></ManageItem>
            },
            {
                path:"updateItem/:id",
                element:<AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
            }
        ]
    }
])

export default routes;