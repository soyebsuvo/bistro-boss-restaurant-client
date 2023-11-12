import Button from '../../../Shared/Button/Button'
import featured from '../../../assets/home/featured.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle'
export default function OurFoodMenus() {
    return (
        <div style={{backgroundImage : `url(${featured})` , backgroundAttachment : 'fixed' , backgroundPosition : 'center' }} className='my-20 text-white'>
            <div className='bg-[rgba(0,0,0,.6)] py-16 px-20'>
                <SectionTitle heading="FROM OUR MENU" subHeading="Check it Out"></SectionTitle>
                <div className='flex justify-center items-center gap-7 px-20 pb-10'>
                    <div>
                        <img src={featured} alt="" />
                    </div>
                    <div className=''>
                        <h2 className='text-xl font-inter'>March 20, 2023</h2>
                        <h2 className='text-xl font-inter'>WHERE CAN I GET SOME?</h2>
                        <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <Button>Read More</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
