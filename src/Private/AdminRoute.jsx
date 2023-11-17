import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAdmin from '../Hook/useAdmin'
import { Navigate } from "react-router-dom";


const AdminRoute = ({children}) => {
    const {user} = useContext(AuthContext)
    const [isAdmin] = useAdmin() 

    if(user && isAdmin){
        return children
    }

    return <Navigate to="/"></Navigate>
};

export default AdminRoute;