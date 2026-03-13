import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SquareArrowOutUpRight } from 'lucide-react';

import Card from './Card';
import type { Project } from '@/app/types/Project';

interface ProjectCardParams {
  project?: Project
}

const ProjectCard : React.FC<ProjectCardParams> = ({
  project = {
    name: "",
    description: "",
    image: "",
    link: "",
    stack: []
  }
}) => {
  return (
    <Card className='projects__card overflow-hidden flex flex-col'>
      <figure className='h-80 relative'>
        <Image 
          src={`/${project.image}`} 
          alt={project.name} 
          className="w-full object-cover"
          fill
        />
      </figure>
      <figcaption className='overflow-ellipses m-10 text-left text-black'>
        <h3 className="text-xl font-semibold mb-2">
          {project.name}
        </h3>
        <p className="overflow-hidden max-h-20 hidden md:block text-sm">
          {project.description}
        </p>
        <Link
          href={project.link}
          rel="external noopener noreferrer"
          className="text-blue-600 hover:underline text-xs inline-flex gap-1"
        >
          View the Github page <SquareArrowOutUpRight size={12}/>
        </Link>
      </figcaption>
      
    </Card>
  )
}

export default ProjectCard