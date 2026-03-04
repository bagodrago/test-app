import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
  // TODO: Fix image filling entire card
  return (
    <Card className='projects__card overflow-hidden flex flex-col'>
      <Image 
        src={`/${project.image}`} 
        alt={project.name} 
        className="mb-4"
        fill
      />
      <Link
        href={project.link}
        rel="external noopener noreferrer"
        className="hover:text-blue-400 hover:underline"
      >
        <h3 className="text-xl font-semibold mb-2">
          {project.name}
        </h3>
        <p className="mb-4">
          {project.description}
        </p>
      </Link>
    </Card>
  )
}

export default ProjectCard