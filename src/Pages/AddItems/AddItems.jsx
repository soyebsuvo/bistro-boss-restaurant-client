import { useForm } from 'react-hook-form'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import { FaUtensils } from 'react-icons/fa'
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import useAxios from '../../Hooks/useAxios';
import Swal from 'sweetalert2';
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

export default function AddItems() {
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxios();
    const {
        register,
        handleSubmit,
        reset
    } = useForm()

    const onSubmit = async (data) => {
        console.log(data)
        const imageFile = { image: data.image[0] }
        // console.log(imageFile)
        const res = await axiosPublic.post(image_hosting_api, imageFile , {
            headers : {
                "content-type": "multipart/form-data",
            }
        });
        console.log(res.data)
        const menuItem = {
            name : data.name,
            recipe : data.recipe,
            image : res.data.data.display_url ,
            category : data.category,
            price : data.price,
        }
        console.log(menuItem)
        if(res.data.success){
            const menuRes = await axiosSecure.post('/menus' , menuItem);
            console.log(menuRes.data);
            if(menuRes.data.insertedId){
                reset()
                Swal.fire({
                    title : `Done`,
                    text : `${data.name} is added to menu item`,
                    timer : 2000
                })
            }
        }
    }

    return (
        <div className='px-20 py-6'>
            <SectionTitle subHeading="What's new?" heading="ADD AN ITEM"></SectionTitle>
            <div>
                <div className="hero bg-[#F3F3F3]">
                    <div className="hero-content w-full">
                        {/* <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div> */}
                        <div className="card shrink-0 w-full">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body w-full">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Recipe name*</span>
                                    </label>
                                    <input {...register("name")} type="text" placeholder="Recipe name" className="input" required />
                                </div>
                                <div className='flex flex-col md:flex-row w-full gap-5'>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Category*</span>
                                        </label>
                                        <select defaultValue="default" {...register("category")} className="select w-full max-w-xs">
                                            <option disabled value="default">Select Category*</option>
                                            <option value="salad">Salad</option>
                                            <option value="dessert">Dessert</option>
                                            <option value="drinks">Drinks</option>
                                            <option value="soup">Soup</option>
                                            <option value="soup">Soup</option>
                                            <option value="popular">Popular</option>
                                            <option value="offered">Offered</option>
                                        </select>
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Price*</span>
                                        </label>
                                        <input {...register("price")} type="text" placeholder="Price" className="input" required />
                                    </div>
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Recipe Details*</span>
                                    </label>
                                    <textarea {...register("recipe")} className='textarea' placeholder='Recipe Details' id="details" cols="30" rows="5"></textarea>
                                </div>
                                <div className='mt-4'>
                                    <input {...register("image")} type="file" className="file-input file-input-[#E8E8E8] w-full max-w-xs" />
                                </div>
                                <div className="mt-6">
                                    <button className="btn bg-gradient-to-r from-[#835D23] to-[#B58130] text-white border-none rounded-none">Add Items <FaUtensils></FaUtensils></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
