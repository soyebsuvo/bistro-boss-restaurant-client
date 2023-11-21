import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import {
    createBrowserRouter,
} from "react-router-dom";
import Menu from "../Pages/Menu/Menu";
import Shop from "../Pages/Shop/Shop";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import MyCarts from "../Pages/MyCarts/MyCarts";
import AllUsers from "../Pages/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import AddItems from "../Pages/AddItems/AddItems";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/menu',
                element: <PrivateRoute><Menu></Menu></PrivateRoute>
            },
            {
                path: '/shop/:category',
                element: <Shop></Shop>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children : [
            {
                path : '/dashboard/carts',
                element : <MyCarts></MyCarts>
            },
            // admin routes
            {
                path : "/dashboard/allUsers",
                element : <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path : '/dashboard/addItems',
                element : <AdminRoute><AddItems></AddItems></AdminRoute>
            }
        ]
    }
])

export default router;