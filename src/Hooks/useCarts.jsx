import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";


export default function useCarts() {
    const axiosSecure = useAxios();
    const { data: carts = [] } = useQuery({
        queryKey: ["carts"],
        queryFn: async () => {
            const res = await axiosSecure.get("/carts");
            return res.data;
        }
    })
    return [carts]
}
