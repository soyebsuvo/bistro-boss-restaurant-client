
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../Shared/Navbar/Navbar'
import Footer from '../Shared/Footer/Footer'
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

export default function MainLayout() {
    const location = useLocation();
    const isLogin = location.pathname.includes("login") || location.pathname.includes("signup");
    const { loading } = useContext(AuthContext);
    if(loading){
        return <div className='h-screen flex justify-center items-center'><h2 className='loading loading-bars loading-lg'></h2></div>
    }
    return (
        <div className='max-w-7xl mx-auto font-inter'>
            { isLogin || <Navbar></Navbar>}
            <Outlet></Outlet>
            { isLogin || <Footer></Footer>}
        </div>
    )
}
