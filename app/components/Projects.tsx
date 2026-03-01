"use client";
import React, { useRef } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, FreeMode } from "swiper/modules";
import type { Swiper as SwiperType } from 'swiper';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Card from './Card';

const Projects = () => {
  const swiperRef = useRef<SwiperType | null>(null)
  return (
    <section className='projects' id='projects'>
      <Swiper
        modules={[Autoplay, FreeMode]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          768: { //md
          slidesPerView: 2,
          },
          1024: { //lg
          slidesPerView: 3,
          }
        }}
        pagination={{
          type: 'bullets',
          clickable: true,

        }}
        autoplay={{
          delay: 0,
          disableOnInteraction: true,
        }}
        freeMode={{
          enabled: true,
          momentum: false,
        }}
        speed={10000}
        loop
        onMouseEnter={() => {swiperRef.current?.autoplay.pause()}}
        onMouseLeave={() => {swiperRef.current?.autoplay.resume()}}
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