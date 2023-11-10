import axios from "axios"
import { useEffect, useState } from "react"
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../../Shared/MenuItem/MenuItem";

export default function PopularMenus() {
    const [menus , setMenus] = useState([]);
    useEffect(() => {
        axios.get('/menu.json')
        .then(res => {
            const filtered = res.data.filter(item => item.category === "popular");
            setMenus(filtered);
        })
    } , [])
  return (
    <div className="my-8 mb-16">
      <SectionTitle heading="FROM OUR MENU" subHeading="Check it out"></SectionTitle>
      <div className="grid md:grid-cols-2 gap-12 px-3 md:px-20">
        {
            menus.map(menu => <MenuItem
            key={menu._id}
            item={menu}
            ></MenuItem>)
        }
      </div>
      <div className="flex justify-center my-3 mt-8">
        <button className="btn border-0 border-b-4 border-black bg-transparent hover:bg-transparent hover:border-black">View Full Menu</button>
      </div>
    </div>
  )
}
