/* eslint-disable react/prop-types */
import { useContext } from "react"
import { AuthContext } from "../AuthProvider/AuthProvider"
import { Navigate, useLocation } from "react-router-dom";

export default function PrivateRoute({ children }) {
    const location = useLocation();
    const { user, loading } = useContext(AuthContext);
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if (user) {
        return children;
    }
    return <Navigate to="/login" state={location.pathname} replace></Navigate>
}
