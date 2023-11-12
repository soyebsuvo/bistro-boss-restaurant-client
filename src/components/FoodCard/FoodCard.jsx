/* eslint-disable react/prop-types */

export default function FoodCard({ item }) {
    const { name, image, price, recipe } = item;
    return (
        <div className="card card-compact bg-[#F3F3F3] rounded-none font-inter">
            <figure><img src={image} alt="image" /></figure>
            <p className="bg-slate-700 text-white absolute px-4 py-2 rounded-sm right-0 top-0 mr-4 mt-4">${price}</p>
            <div className="card-body">
                <h2 className="text-center text-2xl font-bold font-inter">{name}</h2>
                <p className="font-inter">{recipe}</p>
                <div className="card-actions justify-center">
                    <button className="btn border-0 border-b-4 border-black bg-transparent hover:bg-transparent hover:border-black">Order Now</button>
                </div>
            </div>
        </div>
    )
}
