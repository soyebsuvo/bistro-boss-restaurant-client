import { FaAd, FaBars, FaBook, FaCalendar, FaHome, FaShoppingBag, FaShoppingCart, FaSms } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import './dashboard.css'
export default function Dashboard() {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex">
                <div className="bg-[#D1A054] font-cinzel w-80 min-h-screen text-xl px-8 py-12">
                    <div className="mb-14">
                        <h2 className="text-3xl font-cinzel font-extrabold">Bistro Boss</h2>
                        <p className="text-2xl font-cinzel font-bold tracking-widest">Restaurant</p>
                    </div>
                    <ul className="space-y-4">
                        <li className="font-bold"><NavLink className='flex items-center gap-2' to='/dashboard/userHome'>
                            <FaHome></FaHome>
                            User Home</NavLink>
                        </li>
                        <li className="font-bold"><NavLink className='flex items-center gap-2' to='/dashboard/reservation'>
                            <FaCalendar></FaCalendar>
                            Reservation</NavLink>
                        </li>
                        <li className="font-bold"><NavLink className='flex items-center gap-2' to='/dashboard/payment'>
                            <FaCalendar></FaCalendar>
                            Payment History</NavLink>
                        </li>
                        <li className="font-bold"><NavLink className='flex items-center gap-2' to='/dashboard/carts'>
                            <FaShoppingCart></FaShoppingCart>
                            My Carts</NavLink>
                        </li>
                        <li className="font-bold"><NavLink className='flex items-center gap-2' to='/dashboard/review'>
                            <FaAd></FaAd>
                            Add Review</NavLink>
                        </li>
                        <li className="font-bold border-b-2 pb-8"><NavLink className='flex items-center gap-2' to='/dashboard/bookings'>
                            <FaBook></FaBook>
                            My Booking</NavLink>
                        </li>
                        <li className="font-bold"><NavLink className='flex items-center gap-2' to='/'>
                            <FaHome></FaHome>
                            Home</NavLink>
                        </li>
                        <li className="font-bold"><NavLink className='flex items-center gap-2' to='/menu'>
                            <FaBars></FaBars>
                            Menu</NavLink>
                        </li>
                        <li className="font-bold"><NavLink className='flex items-center gap-2' to='/shop/salads'>
                            <FaShoppingBag></FaShoppingBag>
                            Shop</NavLink>
                        </li>
                        <li className="font-bold"><NavLink className='flex items-center gap-2' to='/concact'>
                            <FaSms></FaSms>
                            Contact</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="flex-1">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>

    )
}
