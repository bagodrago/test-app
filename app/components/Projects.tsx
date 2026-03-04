"use client";
import React, { useRef } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from "swiper/modules";
import type { Swiper as SwiperType } from 'swiper';
import "swiper/css";
import "swiper/css/autoplay";

import ProjectCard from './ProjectCard';
import { getProjectData } from '@/app/lib/getProjectData'
import { Project } from '../types/Project';

const Projects = () => {
  const swiperRef = useRef<SwiperType | null>(null)
  const projects = getProjectData();

  return (
    <section className='projects' id='projects'>
      <h1 className='projects__h1'>
        Projects
      </h1>
      <p>
        Here's what I've been working on!
      </p>

      <Swiper
      modules={[Autoplay, FreeMode]}
      spaceBetween={20}
      slidesPerView={2}
      breakpoints={{
        768: { //md
        slidesPerView: 2,
        },
        1024: { //lg
        slidesPerView: 3,
        }
      }}
      autoplay={{
        delay: 0,
      }}
      freeMode={{
        enabled: true,
        momentum: false,
      }}
      speed={10000}
      loop
      onSwiper={(swiper) => {swiperRef.current = swiper}}
      onMouseEnter={() => {swiperRef.current?.autoplay.pause()}}
      onMouseLeave={() => {swiperRef.current?.autoplay.resume()}}
    >
      {projects.map((project: Project, index: number) => {
        return (
          <SwiperSlide key={index}>
            <ProjectCard project={project} />
          </SwiperSlide>
        );
      })}
    </Swiper>
    </section>
  )
}

export default Projects