import { useContext } from "react";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useLocation, useNavigate } from "react-router-dom";


export default function SocialLogins() {
    const navigate = useNavigate();
    const location = useLocation();
    const axiosPublic = useAxiosPublic();
    const { googleLogin } = useContext(AuthContext);
    const handleSocialLogin = media => {
        media()
        .then(res => {
            console.log(res.user)
            const userInfo = {
                name : res.user?.displayName,
                email : res.user?.email
            }
            axiosPublic.post("/users" , userInfo)
            .then(res => {
                console.log(res.data)
            })
            .catch(error => {
                console.error(error)
            })
            navigate(location.state ? location.state : "/");
        })
        .catch(err => {
            console.error(err);
        })
    }
    return (
        <div>
            <div className='flex gap-4 justify-center'>
                <button onClick={() => handleSocialLogin(googleLogin)} className='btn bg-transparent rounded-full p-4 border border-black'><FaGoogle></FaGoogle></button>
                <button className='btn bg-transparent rounded-full p-4 border border-black'><FaGithub></FaGithub></button>
                <button className='btn bg-transparent rounded-full p-4 border border-black'><FaFacebookF></FaFacebookF></button>
            </div>
        </div>
    )
}
 