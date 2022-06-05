import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';

export default function Slider() {
    const images = [
        'image_1.jpg',
        'image_2.jpg',
        'image_3.jpg',
        'image_4.jpg',
        'image_5.jpg',
        'image_6.jpg',
        'image_7.jpg',
    ];

    return (
        <>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                loop={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="relative"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className="absolute bg-gray-900 inset-0 opacity-50"></div>
                        <img
                            className="h-screen lg:max-h-screen w-full object-cover"
                            src={`/images/${image}`}
                            alt="slider"
                        />
                        <div className="absolute drop-shadow-md top-1/2 left-1/2 -translate-x-1/2 translate-y-[-50%] mx-auto">
                            <h1 className="text-center text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                                Best Place to find your dream home
                            </h1>
                            <p className="text-center mt-6 text-xl text-cyan-100 max-w-3xl">
                                Places that make you happy and make you feel
                                good about yourself. Travel is a great way to
                                experience new cultures, new people, new places,
                                and new experiences.
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
