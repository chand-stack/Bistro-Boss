import { useQuery } from "@tanstack/react-query";
import useAxios from "../useAxios/useAxios";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useCart = () => {
    const axios = useAxios()
    const {user} = useContext(AuthContext)
    
    const {data:cart=[],refetch} = useQuery({
        queryKey:["cart",user?.email],
        queryFn: async () => {
           const res = await axios.get(`/carts?email=${user?.email}`)
            return(res.data)
        }
    })
    
    return [cart,refetch]
};

export default useCart;