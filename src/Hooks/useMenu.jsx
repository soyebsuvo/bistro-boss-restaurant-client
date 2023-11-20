// import axios from "axios";
import { useEffect, useState } from "react";
import useAxios from "./useAxios";

export default function useMenu() {
    const axiosSecure = useAxios();
    const [menus, setMenus] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axiosSecure.get('/menus')
            .then(res => {
                // const filtered = res.data.filter(item => item.category === category);
                setMenus(res.data);
                setLoading(false)
            })
    }, [axiosSecure])
    return { menus, loading };
}
