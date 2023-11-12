import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import {
    createBrowserRouter,
} from "react-router-dom";
import Menu from "../Pages/Menu/Menu";
import Shop from "../Pages/Shop/Shop";

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
                path : '/menu',
                element : <Menu></Menu>
            },
            {
                path : '/shop/:category',
                element : <Shop></Shop>
            }
        ]
    }
])

export default router;