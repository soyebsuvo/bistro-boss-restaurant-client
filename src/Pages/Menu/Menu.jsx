import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImage from '../../assets/menu/banner3.jpg';
import PopularMenus from "../Home/PopularMenu/PopularMenus";

export default function Menu() {
  return (
    <div>
        <Helmet>
            <title>Bistro Boss | Menu</title>
        </Helmet>
      <Cover img={menuImage} height='h-[520px]' title="Our food menu"></Cover>
      <PopularMenus></PopularMenus>
    </div>
  )
}
