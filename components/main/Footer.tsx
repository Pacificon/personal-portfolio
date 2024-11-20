"use client";
import React from "react";
import { FaYoutube } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] z-[30] mb-5">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <a
              href="https://github.com/Pacificon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <RxGithubLogo />
                <span className="text-[15px] ml-[6px] hover:underline transition-all">Github</span>
              </p>
            </a>
            <a
              href="https://www.linkedin.com/in/prashanttiwari11"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <RxLinkedinLogo />
                <span className="text-[15px] ml-[6px] hover:underline">LinkedIn</span>
              </p>
            </a>
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <a
              href="https://www.instagram.com/prashant.t277/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <RxInstagramLogo />
                <span className="text-[15px] ml-[6px] hover:underline">Instagram</span>
              </p>
            </a>
            <a
              href="https://x.com/prashant_t49?t=7o3IhRTBLv8DTb2DffZ-eQ&s=09"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <RxTwitterLogo />
                <span className="text-[15px] ml-[6px] hover:underline">Twitter</span>
              </p>
            </a>
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <a href="mailto:prashanttiwari2585@gmail.com">
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <span className="text-[15px] ml-[6px]">Contact Me</span>
              </p>
            </a>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px] hover:underline">
                prashanttiwari2585@gmail.com
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
