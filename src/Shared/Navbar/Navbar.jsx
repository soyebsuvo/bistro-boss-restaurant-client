import { Link, NavLink } from "react-router-dom"
import './navbar.css'
import { useContext } from "react"
import { FaShoppingCart } from 'react-icons/fa';
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useCarts from "../../Hooks/useCarts";

export default function Navbar() {
    const [carts, refetch] = useCarts();
    const { user, logout } = useContext(AuthContext);
    const links = <>
        <li><NavLink className='uppercase font-inter font-extrabold text-white' to='/'>Home</NavLink></li>
        <li><NavLink className='uppercase font-inter font-extrabold text-white' to='/contact'>Contact Us</NavLink></li>
        <li><NavLink className='uppercase font-inter font-extrabold text-white' to='/dashboard'>Dashboard</NavLink></li>
        <li><NavLink className='uppercase font-inter font-extrabold text-white' to='/menu'>Our Menu</NavLink></li>
        <li><NavLink className='uppercase font-inter font-extrabold text-white' to='/shop/salads'>Our Shop</NavLink></li>
        <li><Link className='uppercase font-inter font-extrabold text-white' to='/dashboard/carts'>
            <button className="flex justify-center items-center gap-3">
                <FaShoppingCart className="text-3xl"></FaShoppingCart>
                <div className="badge">+{carts?.length}</div>
            </button>
        </Link></li>
    </>
    const handleLogout = (refetch) => {
        logout()
            .then(() => {
                refetch();
            })
            .catch(err => console.log(err))
            
    }
    return (
        <nav className="max-w-7xl w-full fixed z-10">
            <div className="flex items-center bg-[rgba(0,0,0,0.5)] px-20 py-3">
                <div className="navbar-start items-center flex">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <a className="normal-case text-xl flex items-center">
                        <div className="text-center">
                            <h2 className="text-2xl font-cinzel font-extrabold text-white">Bistro Boss</h2>
                            <p className="text-md font-cinzel font-bold tracking-widest text-white">Restaurant</p>
                        </div>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 items-center">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end flex-1">
                    {
                        user ? <button onClick={()=>handleLogout(refetch)} className="btn">Logout</button> :
                            <Link to='/login' className="btn">Login</Link>
                    }

                </div>
            </div>
        </nav>
    )
}
