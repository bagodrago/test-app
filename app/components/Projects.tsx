"use client";
import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Card from './Card';

const Projects = () => {
  return (
    <section className='projects' id='#projects'>
        <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            // spaceBetween={2}
            slidesPerView={3}
            loop={true}
        >
            <SwiperSlide>
                <Card className='projects__card'>A</Card>
            </SwiperSlide>
            <SwiperSlide>
                <Card className='projects__card'>B</Card>
            </SwiperSlide>
            <SwiperSlide>
                <Card className='projects__card'>C</Card>
            </SwiperSlide>
            <SwiperSlide>
                <Card className='projects__card'>D</Card>
            </SwiperSlide>
            <SwiperSlide>
                <Card className='projects__card'>E</Card>
            </SwiperSlide>
            <SwiperSlide>
                <Card className='projects__card'>F</Card>
            </SwiperSlide>
        </Swiper>
    </section>
  )
}

export default Projects