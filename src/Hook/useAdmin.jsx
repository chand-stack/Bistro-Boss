import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../useAxios/useAxios";

const useAdmin = () => {
    const {user} = useContext(AuthContext)
    const publicAxios = useAxios()

    const {data:isAdmin} = useQuery({
        queryKey:[user?.email, "isAdmin"],
        queryFn: async () => {
            const res = await publicAxios.get(`/users/admin/${user?.email}`)
            return res.data.admin
        }
    })
    return [isAdmin]
};

export default useAdmin;