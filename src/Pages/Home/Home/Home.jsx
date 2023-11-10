import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenus from "../PopularMenu/PopularMenus";
import SubBannerSection from "../SubBannerSection/SubBannerSection";


export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <SubBannerSection></SubBannerSection>
      <PopularMenus></PopularMenus>
    </div>
  )
}
