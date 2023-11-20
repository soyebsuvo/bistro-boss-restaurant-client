import loginBg from '../../assets/reservation/wood-grain-pattern-gray1x.png';
import loginImage from '../../assets/others/authentication2.png'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import SocialLogins from '../../components/SocialLogins/SocialLogins';


export default function SignUp() {
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const { createUser } = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate('/')
                const userInfo = {
                    name : data.name,
                    email : data.email,
                }
                axiosPublic.post("/users" , userInfo)
                .then(res => {
                    if(res.data.insertedId){
                        console.log("user added")
                    }
                })
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className="hero p-8 min-h-[100vh] text-black" style={{ backgroundImage: `url(${loginBg})` }}>
            <div className=""></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="hero h-full" style={{ backgroundImage: `url(${loginBg})`, boxShadow: '0px 0px 10px gray' }}>
                    <div className=""></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="hero">
                            <div className="hero-content flex-col lg:flex-row-reverse gap-20">
                                <div className="text-center lg:text-left md:w-1/2">
                                    <img src={loginImage} alt="" />
                                </div>
                                <div className="card flex-shrink-0 w-full md:w-1/2">
                                    <h2 className='text-black text-4xl text-center font-cinzel font-bold'>Sign Up</h2>
                                    <form onSubmit={handleSubmit(onSubmit)} className="card-body py-0 text-black">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text font-inter">Email</span>
                                            </label>
                                            <input {...register("name", { required: true })} type="text" name='name' placeholder="Name" className="input input-bordered" />
                                            {errors.name && <span className='text-red-600 text-left'>Name is required</span>}
                                        </div>

                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text font-inter">Email</span>
                                            </label>
                                            <input {...register("email", { required: true })} type="email" name='email' placeholder="email" className="input input-bordered" />
                                            {errors.email && <span className='text-red-600 text-left'>Email is required</span>}
                                        </div>

                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text font-inter">Password</span>
                                            </label>
                                            <input {...register("password", { required: true })} type="password" name='password' placeholder="password" className="input input-bordered" />
                                            {errors.password && <span className='text-red-600 text-left'>Password is required</span>}
                                            <label className="label">
                                                <a href="#" className="label-text-alt link link-hover font-inter">Forgot password?</a>
                                            </label>
                                        </div>

                                        <div className="form-control mt-6">
                                            <input className='btn bg-[rgba(209,160,84,0.70)] text-white font-inter' type="submit" value="Sign Up" />
                                        </div>
                                    </form>
                                    <p className='text-[rgba(209,160,84,1)]'>Already Registered? <Link to='/login' className='font-bold'>GO to login</Link></p>
                                    <p className='text-center text-black my-2'>Or Sign up with</p>
                                    
                                    <SocialLogins></SocialLogins>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
