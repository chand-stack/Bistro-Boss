import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Shared/NavBar/Navbar";
import Footer from "../Components/Shared/Footer/Footer";

const Main = () => {
    const location = useLocation()
    const loginpage = location.pathname.includes("login") || location.pathname.includes("register")

    return (
        <div>
            {loginpage || <Navbar></Navbar>}
            <Outlet></Outlet>
            {loginpage || <Footer></Footer>}
        </div>
    );
};

export default Main;