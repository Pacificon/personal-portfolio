import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-center py-20"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 pl-[250px]">
        <a href="https://github.com/Pacificon/Cybercode">
          <ProjectCard
            src="/cybercodemain.jpg"
            title="Cybercode | Code Editor"
            description="A collaborative code editor built with React, MongoDB, Express, and Socket.io,
           enabling real-time updates and communication."
          />
        </a>
        <a href="https://github.com/Pacificon/twitter_clone">
          <ProjectCard
            src="/twitter.jpg"
            title="Twitter Clone"
            description="A responsive Twitter clone built with React, Tailwind CSS, and Firebase. Includes user authentication, real-time tweets, likes, retweets, and comments, with smooth animations for a seamless experience."
          />
        </a>
        <a href="https://github.com/Pacificon/portfolio-website">
          <ProjectCard
            src="/portfolio.jpg"
            title="Personal Website Portfolio"
            description="A space-themed portfolio built with Next.js, featuring smooth animations and a cosmic design. Showcases my projects, skills, and experience in a captivating, responsive layout."
          />
        </a>
      </div>
    </div>
  );
}

export default Projects