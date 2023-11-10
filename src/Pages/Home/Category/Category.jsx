import { Swiper, SwiperSlide } from 'swiper/react';
import slide from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
// import { Swiper } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
export default function Category() {
    return (
        <div className='py-16 md:px-20'>
            <Swiper
            style={{padding : '0px 0px 60px 0px'}}
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='flex justify-center'>
                        <img src={slide} alt="" className='h-[300px]' />
                    </div>
                    <h2 className='text-4xl font-inter font-bold -mt-12 text-center text-white'>Salads</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex justify-center'>
                        <img src={slide2} alt="" className='h-[300px]' />
                    </div>
                    <h2 className='text-4xl font-inter font-bold -mt-12 text-center text-white'>Pizzas</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex justify-center'>
                        <img src={slide3} alt="" className='h-[300px]' />
                    </div>
                    <h2 className='text-4xl font-inter font-bold -mt-12 text-center text-white'>Soups</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex justify-center'>
                        <img src={slide4} alt="" className='h-[300px]' />
                    </div>
                    <h2 className='text-4xl font-inter font-bold -mt-12 text-center text-white'>Cakes</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex justify-center'>
                        <img src={slide5} alt="" className='h-[300px]' />
                    </div>
                    <h2 className='text-4xl font-inter font-bold -mt-12 text-center text-white'>Salads</h2>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}
