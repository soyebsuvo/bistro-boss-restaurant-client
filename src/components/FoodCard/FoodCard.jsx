/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
export default function FoodCard({ item }) {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const { name, image, price, recipe } = item;
    const handleAddToCart = food => {
        console.log(food)
        if (user && user.email) {
            alert("")
        } else {
            Swal.fire({
                title: "You are not Logged In",
                text: "You need to login before add a product to cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login")
                }
            });
        }

    }
    return (
        <div className="card card-compact bg-[#F3F3F3] rounded-none font-inter">
            <figure><img src={image} alt="image" /></figure>
            <p className="bg-slate-700 text-white absolute px-4 py-2 rounded-sm right-0 top-0 mr-4 mt-4">${price}</p>
            <div className="card-body">
                <h2 className="text-center text-2xl font-bold font-inter">{name}</h2>
                <p className="font-inter">{recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={() => handleAddToCart(item)} className="btn border-0 border-b-4 border-black bg-transparent hover:bg-transparent hover:border-black">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}
