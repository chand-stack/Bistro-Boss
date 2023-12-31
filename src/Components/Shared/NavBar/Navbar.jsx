import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../../Hook/useCart";

const Navbar = () => {
  const {user,logOut}= useContext(AuthContext)

  const [cart,refetch] = useCart()

  const logoutHandler = () => {
    logOut()
    .then(()=>{
      console.log("logout");
      refetch()
    })
    .catch(err=> {
      console.log(err);
    })
  }
    const links = <>
       <li><Link to="/">Home</Link></li>
       <li><Link to="/menu">Our Menu</Link></li>
       <li><Link to="/order">Our Shop</Link></li>
       <li><Link to="/dashBoard/cart" className="btn bg-transparent text-white border-none">
       <FaShoppingCart />
  Cart
  <div className="badge badge-secondary">+{cart?.length}</div>
</Link></li>
      
    </>
    return (
        <div>
            <div className="navbar bg-black bg-opacity-50 text-white fixed z-10">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {
            links
        }
      </ul>
    </div>
    <div>
    <h1 className="text-3xl font-black">BISTRO BOSS</h1>
    <h1 className="text-2xl font-semibold">Restaurant</h1>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
   {
    links
   }
    </ul>
  </div>
  <div className="navbar-end">
   {
    user ? <button onClick={logoutHandler} className="btn">Log out</button> : <Link className="btn" to="/login">Login</Link>
   }
  </div>
</div>
        </div>
    );
};

export default Navbar;