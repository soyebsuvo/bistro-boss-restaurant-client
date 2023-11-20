import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";


export default function SocialLogins() {
    return (
        <div>
            <div className='flex gap-4 justify-center'>
                <button className='btn bg-transparent rounded-full p-4 border border-black'><FaGoogle></FaGoogle></button>
                <button className='btn bg-transparent rounded-full p-4 border border-black'><FaGithub></FaGithub></button>
                <button className='btn bg-transparent rounded-full p-4 border border-black'><FaFacebookF></FaFacebookF></button>
            </div>
        </div>
    )
}
