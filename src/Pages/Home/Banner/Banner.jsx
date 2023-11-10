import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img from '../../../assets/home/01.jpg';
import img2 from '../../../assets/home/02.jpg';
import img3 from '../../../assets/home/03.png';
import img4 from '../../../assets/home/04.jpg';
import img5 from '../../../assets/home/05.png';
import img6 from '../../../assets/home/06.png';

export default function Banner() {
   
    return (
        <Carousel
            showThumbs={false}
            autoPlay={true}
        >
            <div>
                <img className="h-[540px]" src={img} />
            </div>
            <div>
                <img className="h-[540px]" src={img2} />
            </div>
            <div>
                <img className="h-[540px]" src={img3} />
            </div>
            <div>
                <img className="h-[540px]" src={img4} />
            </div>
            <div>
                <img className="h-[540px]" src={img5} />
            </div>
            <div>
                <img className="h-[540px]" src={img6} />
            </div>
        </Carousel>
    )
}
