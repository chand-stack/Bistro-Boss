import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useLocation } from "react-router-dom";

export const intance = axios.create({
    baseURL:"http://localhost:5000",
    withCredentials: true
})

const useAxios = () => {

    const {logOut} = useContext(AuthContext)
    const location = useLocation()

    intance.interceptors.request.use(function(config){
        const token = localStorage.getItem("access-token")
        config.headers.authorization = `Bearer ${token}`
        return config
    }, function(error){
        return Promise.reject(error)
    })

    intance.interceptors.response.use(function(response){
        return response
    },async error =>{
        const status = error.response.status
        if(status === 401 || status === 403){
            location("/login")
            await logOut().then(()=>{console.log("logout");})
        }
        return Promise.reject(error)
    })
    return intance
};

export default useAxios;