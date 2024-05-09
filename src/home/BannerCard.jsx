import React from 'react';
import { useRef, useState } from 'react';
// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';
// import swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import './BannerCard.css'
// import required modules
import { EffectCards } from 'swiper/modules';



function BannerCard() {
    return (
        <div className='banner'>
            <Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]} classname='mySwiper'>
                <SwiperSlide></SwiperSlide>
                <SwiperSlide></SwiperSlide>
                <SwiperSlide></SwiperSlide>
                <SwiperSlide></SwiperSlide>
                <SwiperSlide></SwiperSlide>
                <SwiperSlide></SwiperSlide>
                <SwiperSlide></SwiperSlide>
                <SwiperSlide></SwiperSlide>
                <SwiperSlide></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default BannerCard