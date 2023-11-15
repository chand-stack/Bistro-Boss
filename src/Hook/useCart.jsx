import { useQuery } from "@tanstack/react-query";
import useAxios from "../useAxios/useAxios";

const useCart = () => {
    const axios = useAxios()
    
    const {data:cart=[]} = useQuery({
        queryKey:["cart"],
        queryFn: async () => {
           const res = await axios.get("/carts")
            return(res.data)
        }
    })
    
    return [cart]
};

export default useCart;