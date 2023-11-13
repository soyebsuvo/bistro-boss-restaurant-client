
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../Shared/Navbar/Navbar'
import Footer from '../Shared/Footer/Footer'

export default function MainLayout() {
    const location = useLocation();
    const isLogin = location.pathname.includes("login") || location.pathname.includes("signup");
    return (
        <div className='max-w-7xl mx-auto'>
            { isLogin || <Navbar></Navbar>}
            <Outlet></Outlet>
            { isLogin || <Footer></Footer>}
        </div>
    )
}
