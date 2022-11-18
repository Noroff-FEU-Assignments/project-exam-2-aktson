import React from "react";
import { Link } from 'react-router-dom';
import SwiperCore, { Virtual, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";

SwiperCore.use([Virtual, Navigation, Pagination]);

function Slider({ followersOrFollowing, message }) {
    return (

        <Swiper
            breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
            }}
            slidesPerView={3}
            centeredSlides={true}
            spaceBetween={10}
            pagination={{
                type: 'fraction',
            }}
            navigation={true}
            virtual

        >
            {
                followersOrFollowing && followersOrFollowing?.length === 0
                    ?
                    <SwiperSlide>
                        <p className='text-center bg-secondary text-lightGray p-8 rounded-xl shadow-xl '>{message}</p>
                    </SwiperSlide>

                    :
                    followersOrFollowing && followersOrFollowing.map((result) => {
                        return <SwiperSlide key={result.name}>
                            <Link to={`/user-specific/${result.name}`} className="tab-inner-users" data-tip={result.name}  >
                                <img src={result.avatar} alt={result.name} className="rounded-t-xl sm:w-40 sm:h-40 w-32 h-32 object-cover" />
                                <p className='p-2 text-center bg-gray-200 w-full'>{result.name}</p>
                            </Link>
                        </SwiperSlide>

                    })
            }
        </Swiper>

    );
}
export default Slider;