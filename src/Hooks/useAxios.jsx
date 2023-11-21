import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const axiosSecure = axios.create({
    baseURL : "http://localhost:5000"
})
export default function useAxios() {
    const navigate = useNavigate();
    const { logout } = useContext(AuthContext);
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token');
        config.headers.authorization = `bearer ${token}`;
        return config;
    } , function(error){
        return Promise.reject(error);
    })

    axiosSecure.interceptors.response.use( res => {
        return res;
    } , error => {
        const status = error.response.status;
        if(status === 401 || status === 403){
            logout().then(() => navigate("/login"))
        }else{
            //
        }
    })
    return axiosSecure;
}
