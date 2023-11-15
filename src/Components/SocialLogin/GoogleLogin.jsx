import { useContext } from "react";
import { FaGooglePlusG } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";

const GoogleLogin = () => {
    const {googleSignIn} = useContext(AuthContext)

    const googleHandler = () => {
        googleSignIn()
        .then(result => {
            console.log(result.user);
        })
    }
    return (
        <div className="flex justify-center p-3">
            <button onClick={googleHandler} className="btn"><FaGooglePlusG></FaGooglePlusG>Goole</button>
        </div>
    );
};

export default GoogleLogin;