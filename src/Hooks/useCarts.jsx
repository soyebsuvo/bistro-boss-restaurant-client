import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


export default function useCarts() {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxios();
    const { data: carts = [] , refetch} = useQuery({
        queryKey: ["carts"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user?.email}`);
            return res.data;
        }
    })
    return [carts , refetch]
}
