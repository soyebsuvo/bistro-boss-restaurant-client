import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ContactNumber from "../ContactNumber/ContactNumber";
import OurFoodMenus from "../OurFoodMenus/OurFoodMenus";
import PopularMenus from "../PopularMenu/PopularMenus";
import SubBannerSection from "../SubBannerSection/SubBannerSection";


export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <SubBannerSection></SubBannerSection>
      <PopularMenus></PopularMenus>
      <ContactNumber></ContactNumber>
      <OurFoodMenus></OurFoodMenus>
    </div>
  )
}
