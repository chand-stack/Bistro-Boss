// import { useEffect, useState } from "react"

import { useQuery } from "@tanstack/react-query"
import usePublicAxios from "../useAxios/usePublicAxios"

const useMenu = () => {
    // const [menu,setMenu] = useState([])
    // const [loading,setLoading] = useState(true)

    // useEffect(()=>{
    //     fetch('http://localhost:5000/menu')
    //     .then(res => res.json())
    //     .then(data => {
    //         setMenu(data)
    //     setLoading(false)
    //     })
    // },[])

    const publicAxios = usePublicAxios()
    const {data:menu, isLoading:loading, refetch} = useQuery({
        queryKey:["menu"],
        queryFn: async () => {
            const res = await publicAxios.get("/menu")
            return res.data
        }
    })
    return [menu,loading,refetch]
}

export default useMenu