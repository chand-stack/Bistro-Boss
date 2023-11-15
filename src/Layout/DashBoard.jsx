import { FaAd, FaCalendar, FaCalendarCheck, FaCartPlus, FaHome, FaMoneyBill } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const DashBoard = () => {
    return (
        <div className="container mx-auto flex">
            <div className="max-w-xs h-screen bg-[#D1A054]">
            <div className="py-7 px-5">
    <h1 className="text-3xl font-black">BISTRO BOSS</h1>
    <h1 className="text-2xl font-semibold">Restaurant</h1>
    </div>
    <ul className="uppercase py-7 px-5 space-y-3 font-medium">
        <li><NavLink className="flex items-center gap-1" to="/dashboard/home"><FaHome></FaHome>User Home</NavLink></li>
        <li><NavLink className="flex items-center gap-1" to="/dashboard/reservation"><FaCalendar></FaCalendar> reservation</NavLink></li>
        <li><NavLink className="flex items-center gap-1" to="/dashboard/payment"><FaMoneyBill></FaMoneyBill> payment history</NavLink></li>
        <li><NavLink className="flex items-center gap-1" to="/dashboard/cart"><FaCartPlus></FaCartPlus> my cart</NavLink></li>
        <li><NavLink className="flex items-center gap-1" to="/dashboard/review"><FaAd></FaAd> add review</NavLink></li>
        <li><NavLink className="flex items-center gap-1" to="/dashboard/booking"><FaCalendarCheck></FaCalendarCheck> my booking</NavLink></li>
    </ul>
            </div> 
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default DashBoard;