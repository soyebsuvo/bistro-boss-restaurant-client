import axios from "axios";
import { useEffect, useState } from "react";

export default function useMenu() {
    const [menus, setMenus] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios.get('/menu.json')
            .then(res => {
                // const filtered = res.data.filter(item => item.category === category);
                setMenus(res.data);
                setLoading(false)
            })
    }, [])
    return { menus, loading };
}
