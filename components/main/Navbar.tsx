import { Socials } from '@/constants';
import Image from 'next/image';
import React from 'react';

const Navbar = () => {
    return (
        <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
            <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
                <a href="#about-me" className="flex items-center">
                    <span className="font-bold ml-[10px] hidden md:block text-gray-300 transition-transform hover:scale-110 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                        Prashant Tiwari
                    </span>
                </a>

                <div className="flex-grow flex justify-center mr-[70px]">
                    <div className="flex items-center justify-between border border-[#7042f861] bg-[#0300145e] px-[20px] py-[10px] rounded-full text-gray-200 max-w-[500px] w-full">
                        <a
                            href="#about-me"
                            className="cursor-pointer transition-all hover:underline hover:text-purple-400"
                        >
                            About me
                        </a>
                        <a
                            href="#skills"
                            className="cursor-pointer transition-all hover:underline hover:text-purple-400"
                        >
                            Skills
                        </a>
                        <a
                            href="#projects"
                            className="cursor-pointer transition-all hover:underline hover:text-purple-400"
                        >
                            Projects
                        </a>
                    </div>
                </div>

                <div className="flex flex-row gap-5">
                    {Socials.map((social) => (
                        <a
                            href={social.link}
                            key={social.name}
                            className="transition-transform hover:scale-110"
                        >
                            <Image
                                src={social.src}
                                alt={social.name}
                                key={social.name}
                                width={24}
                                height={24}
                            />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
