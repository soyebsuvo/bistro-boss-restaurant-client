import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ContactNumber from "../ContactNumber/ContactNumber";
import OurFoodMenus from "../OurFoodMenus/OurFoodMenus";
import PopularMenus from "../PopularMenu/PopularMenus";
import SubBannerSection from "../SubBannerSection/SubBannerSection";
import Testimonials from "../Testimonials/Testimonials";


export default function Home() {
  return (
    <div>
        <Helmet>
            <title>Bistro Boss | Home</title>
        </Helmet>
      <Banner></Banner>
      <Category></Category>
      <SubBannerSection></SubBannerSection>
      <PopularMenus></PopularMenus>
      <ContactNumber></ContactNumber>
      <OurFoodMenus></OurFoodMenus>
      <Testimonials></Testimonials>
    </div>
  )
}
