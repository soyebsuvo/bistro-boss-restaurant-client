// import axios from "axios";
// import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

export default function useMenu() {
    const axiosSecure = useAxios();
    // const [menus, setMenus] = useState([]);
    // const [loading, setLoading] = useState(true)
    // useEffect(() => {
    //     axiosSecure.get('/menus')
    //         .then(res => {
    //             // const filtered = res.data.filter(item => item.category === category);
    //             setMenus(res.data);
    //             setLoading(false)
    //         })
    // }, [axiosSecure])
    const { data : menus = [] , isPending : loading , refetch} = useQuery({
        queryKey : ["menus"],
        queryFn : async () => {
            const res = await axiosSecure.get("/menus");
            return res.data;
        }
    })
    return { menus, loading , refetch};
}
