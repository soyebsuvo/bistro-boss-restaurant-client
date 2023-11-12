/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

export default function MenuCategory({ items, img, title }) {
    return (
        <div>
            {title && <Cover img={img} height='h-[450px]' title={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-12 px-3 md:px-20 my-16">
                {
                    items.map(menu => <MenuItem
                        key={menu._id}
                        item={menu}
                    ></MenuItem>)
                }
            </div>
            <div className="flex justify-center">
                <Link to={`/shop/${title}`}><button className="btn border-0 border-b-4 border-black bg-transparent hover:bg-transparent hover:border-black">Order Now</button></Link>
            </div>
        </div>
    )
}
