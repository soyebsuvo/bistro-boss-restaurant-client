/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";

export default function AdminRoute({ children }) {
    const [isAdmin , isAdminLoading] = useAdmin();
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading || isAdminLoading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>
}
