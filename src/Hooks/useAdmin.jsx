import { useQuery } from "@tanstack/react-query"
import { useContext } from "react"
import { AuthContext } from "../AuthProvider/AuthProvider"
import useAxios from "./useAxios";

export default function useAdmin() {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxios();
    const { data: isAdmin } = useQuery({
        queryKey: [user?.email, "isAdmin"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            return res.data.admin;
        }
    })
    return [isAdmin]
}
