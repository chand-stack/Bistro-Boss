import axios from "axios";

export const intance = axios.create({
    baseURL:"http://localhost:5000",
    withCredentials: true
})

const useAxios = () => {
    return intance
};

export default useAxios;