"use client"

import React from 'react'
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion';
import { SparklesIcon } from '@heroicons/react/16/solid';
import Image from 'next/image';

const Herocontent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-between mt-40 px-20 w-full z-[20]"
    >
      <div className="h-full w-1/2 flex flex-col gap-5 justify-center text-start ">


        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-8 text-6xl font-bold text-white max-w-[600px]"
        >
          <span> Hi I&apos;m <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"> Prashant Tiwari <br /> </span>
            <motion.div
              variants={slideInFromTop}
              className="Welcome-box py-[15px] px-[8px] border mt-3 border-[#7042f88b] opacity-[0.9] "
            >
              <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
              <h1 className="Welcome-text text-[13px] ">Full Stack Web Developer</h1>
            </motion.div>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 max-w-[600px] hover:animate-wave"
        >
          I’m a 4th-year student at IIIT Surat, turning coffee into code and bugs into features. With 650+ LeetCode problems solved and a knack for building MERN stack applications, I promise I’m not just debugging my life—check out my projects and see for yourself!
        </motion.p>


        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          href="https://drive.google.com/drive/folders/1ZmoXCdvGZJ96aZ7pmRbPaEHyZyvMWfIu?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-1/2 h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work Icons"
          height={650}
          width={650}
          className="object-contain"
        />
      </motion.div>
    </motion.div>
  );
}

export default Herocontent
