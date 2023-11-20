/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from 'sweetalert2'
import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";
import useAxios from "../../Hooks/useAxios";
import useCarts from "../../Hooks/useCarts";
export default function FoodCard({ item }) {
    const [ , refetch] = useCarts();
    const axiosSecure = useAxios();
    const navigate = useNavigate();
    const locatoin = useLocation();
    const { user } = useContext(AuthContext);
    const { name, image, price, recipe , _id} = item;
    const handleAddToCart = food => {
        console.log(food)
        if (user && user.email) {
            const newCart = {
                foodId : _id,
                email : user.email,
                name, 
                image, 
                price, 
                recipe
            }
            axiosSecure.post('/carts' , newCart)
            .then(res => {
                console.log(res.data)
                if(res.data.acknowledged){
                    Swal.fire({
                        title : `${name}`,
                        text : "Added To Cart",
                        timer : 2000
                    })
                }
                refetch();
            })
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
                    navigate("/login" , { state : locatoin.pathname})
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
