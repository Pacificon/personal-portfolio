import React from 'react';
import Image from 'next/image';

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <div
      className="cursor-pointer flex flex-col items-start bg-gray-800 text-white rounded-lg shadow-lg border border-[#2A0E61] overflow-hidden w-[300px] h-[440px] hover:scale-105 transition-transform duration-300"
    >
      {/* Image Section */}
      <div className="w-full h-[200px] relative">
        <Image
          src={src}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-start p-4 flex-1 w-full">
        <h1 className="text-xl font-semibold mb-2">{title}</h1>
        <p className="text-gray-300 text-sm mb-4">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
