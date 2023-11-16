import { useContext } from "react";
import { FaGooglePlusG } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import usePublicAxios from "../../useAxios/usePublicAxios";

const GoogleLogin = () => {
    const {googleSignIn} = useContext(AuthContext)

    const publicAxios = usePublicAxios()

    const googleHandler = () => {
        googleSignIn()
        .then(result => {
            console.log(result.user);
            const userInfo = {
                name: result.user.displayName,
                email: result.user.email 
            }
          publicAxios.post("/users",userInfo)
          .then(res => {
            console.log(res.data);
          })
        })
    }
    return (
        <div className="flex justify-center p-3">
            <button onClick={googleHandler} className="btn"><FaGooglePlusG></FaGooglePlusG>Goole</button>
        </div>
    );
};

export default GoogleLogin;