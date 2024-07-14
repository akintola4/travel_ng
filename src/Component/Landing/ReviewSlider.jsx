
//to use aos libary
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

//to use swiper 
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

import Review from './Review';
import reviews from '../../review';

// import required modules
import { Pagination, Navigation } from "swiper/modules";


//here i imported the code for aan icons for the arrows in the button
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

export default function ReviewSwiper() {
    //this for the swiper
    const [swiperRef, setSwiperRef] = useState(null);
    const prevHandler = () => {
        swiperRef.slidePrev();
      };
    
      const nextHandler = () => {
        swiperRef.slideNext();
      };
    //this for aos
    useEffect(() => {
        AOS.init();
    }, [])


    //this for the review data
    const review = reviews.map((info) => {
        // eslint-disable-next-line react/jsx-key
        return <SwiperSlide > <Review
        key={info.id}
        info={info}
        title={info.title}
        company={info.company}
        reviewInfo={info.review}
        name={info.name}
        img={info.img}
        rating={info.stats.rating}
      /></SwiperSlide>
    })
    return (

        <section className='m-5 review-1 md:m-10'>
            <div className="flex flex-row items-center justify-between">
            <div className='flex flex-col gap-2'>
            <h4 className='text-3xl font-semibold'>Reviews</h4>
            <p className='text-md font-light'>What people says about Golobe facilities</p>
          </div>
            <div className="flex flex-row gap-10 text-2xl">
            <button onClick={prevHandler}><FaArrowLeftLong /></button>
                <button onClick={nextHandler}><FaArrowRight /></button>
            </div>
                
            </div>
            <Swiper
                onSwiper={setSwiperRef}
                direction={"horizontal"}
                slidesPerView={2}
                centeredSlides={true}
                spaceBetween={20}
                mousewheel={true}
                pagination={{
                    dynamicBullets: true,
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="p-5 my-5 mySwiper "
            >
                {review}
            </Swiper>
        </section>
    )
}
