import React, { ReactNode } from 'react';
import { Swiper } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface CarouselProps { 
  children: ReactNode;
}

const ProjectCarousel = ({children}: CarouselProps) => {
  
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      spaceBetween={20}
      slidesPerView={2}
      breakpoints={{
        768:  { slidesPerView: 2,}, //md
        1024: { slidesPerView: 3,}  //lg
      }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: true
      }}
      loop
      pagination
      navigation
    >
      {children}
    </Swiper>
  )
}

export default ProjectCarousel