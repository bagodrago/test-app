'use client';
import React from 'react';

import { SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/autoplay";

import { getProjectData } from '@/app/lib/getProjectData'

import ProjectCard from './ProjectCard';
import { Project } from '../types/Project';
import ProjectCarousel from './ProjectCarousel';


const Projects = () => {
  const projects = getProjectData();
  
  return (
    <section className='projects' id='projects'>
      <span className='m-10 space-y-2.5'>
        <h1 className='projects__h1'>
          Projects
        </h1>
        <p>
          See what I've been working on and what skills each project taught me!
        </p>
      </span>

      <ProjectCarousel>
        {projects.map((project: Project, index: number) => {
          return (
            <SwiperSlide key={index}>
              <ProjectCard project={project} />
            </SwiperSlide>
          );
        })}
      </ProjectCarousel>
    </section>
  )
}

export default Projects