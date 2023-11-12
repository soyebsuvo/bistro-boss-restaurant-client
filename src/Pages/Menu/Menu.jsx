import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImage from '../../assets/menu/banner3.jpg';
import bannerImage from '../../assets/menu/dessert-bg.jpeg';
import pizzaImage from '../../assets/menu/pizza-bg.jpg';
import saladImage from '../../assets/menu/salad-bg.jpg';
import soupImage from '../../assets/menu/soup-bg.jpg';
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuCategory from "../../components/MenuCategory/MenuCategory";
import useMenu from "../../Hooks/useMenu";

export default function Menu() {
    const {menus} = useMenu();
    const offered = menus.filter(menu => menu.category === "offered");
    const soups = menus.filter(menu => menu.category === "soup");
    const desserts = menus.filter(menu => menu.category === "dessert");
    const salads = menus.filter(menu => menu.category === "salad");
    const pizzas = menus.filter(menu => menu.category === "pizza");
  return (
    <div className="space-y-5">
        <Helmet>
            <title>Bistro Boss | Menu</title>
        </Helmet>
      <Cover img={menuImage} height='h-[520px]' title="Our food menu"></Cover>
      <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      <MenuCategory items={desserts} img={bannerImage} title="desserts"></MenuCategory>
      <MenuCategory items={pizzas} img={pizzaImage} title="pizzas"></MenuCategory>
      <MenuCategory items={salads} img={saladImage} title="salads"></MenuCategory>
      <MenuCategory items={soups} img={soupImage} title="soups"></MenuCategory>
    </div>
  )
}
