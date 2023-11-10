/* eslint-disable react/prop-types */

export default function MenuItem({ item }) {
    const { name , image , price , recipe } = item;
    return (
        <div className="px-3 flex space-x-2">
            <img style={{borderRadius : '0 200px 200px 200px'}} className="w-[80px] h-[80px]" src={image} alt="" />
            <div>
                <h2 className="font-inter text-xl mb-1 font-light">{name}---------------</h2>
                <p className="text-sm font-inter">{recipe}</p>
            </div>
            <p className="text-[#BB8506] font-inter">${price}</p>
        </div>
    )
}
