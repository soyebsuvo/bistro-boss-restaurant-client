import loginBg from '../../assets/reservation/wood-grain-pattern-gray1x.png';
import loginImage from '../../assets/others/authentication2.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import SocialLogins from '../../components/SocialLogins/SocialLogins';
export default function Login() {
    const navigate = useNavigate();
    const location = useLocation();
    const { login } = useContext(AuthContext);
    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const captcha = e.target.captcha.value;
        if (validateCaptcha(captcha) === false) {
            return alert("insert valid captcha code");
        } else {
            login(email, password)
                .then(result => {
                    const user = result.user;
                    console.log(user);
                    navigate(location.state ? location.state : '/')
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }


    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    return (
        <div className="hero p-8 min-h-[100vh] text-black" style={{ backgroundImage: `url(${loginBg})` }}>
            <div className=""></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="hero h-full" style={{ backgroundImage: `url(${loginBg})`, boxShadow: '0px 0px 10px gray' }}>
                    <div className=""></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="hero">
                            <div className="hero-content flex-col lg:flex-row gap-20">
                                <div className="text-center lg:text-left md:w-1/2">
                                    <img src={loginImage} alt="" />
                                </div>
                                <div className="card flex-shrink-0 w-full md:w-1/2">
                                    <h2 className='text-black text-4xl text-center font-cinzel font-bold'>Login</h2>
                                    <form onSubmit={handleLogin} className="card-body text-black py-0">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text font-inter">Email</span>
                                            </label>
                                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text font-inter">Password</span>
                                            </label>
                                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                            <label className="label">
                                                <a href="#" className="label-text-alt link link-hover font-inter">Forgot password?</a>
                                            </label>
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <LoadCanvasTemplate />
                                            </label>
                                            <input type="text" name='captcha' placeholder="Enter Captcha Code" className="input input-bordered" required />
                                        </div>
                                        <div className="form-control mt-6">
                                            <input className='btn bg-[rgba(209,160,84,0.70)] text-white font-inter' type="submit" value="Login" />
                                        </div>
                                    </form>
                                    <p className='text-[rgba(209,160,84,1)]'>New here? <Link to='/signup' className='font-bold'>Create a new account</Link></p>
                                    <p className='text-center text-black my-2'>Or login with</p>
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
