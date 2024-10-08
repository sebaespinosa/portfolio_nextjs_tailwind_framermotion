'use client'

import {motion} from 'framer-motion';

import Transition from "@/components/Transition";
import ParticlesContainer from '@/components/ParticlesContainer';
import ProjectsBtn from '@/components/ProjectsBtn';
import Avatar from '@/components/Avatar';

import { fadeIn } from '../../variants';
import MotionDivClient from '@/components/MotionDivClient';

export default function Home() {
  return (
    <>
    <Transition />
    <div className='bg-primary/60 h-screen'>
      {/* Text */}
      <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
        <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto'>
          {/* Title */}
          <motion.h1
           variants={fadeIn('down', 0.2)}
           initial='hidden'
           animate='show'
           exit='hidden'
           className="h1">
            Transforming ideas <br /> Into {' '}
            <span className="text-accent">Digital Reality</span>
          </motion.h1>
          {/* Subtitle */}
          <motion.p
           variants={fadeIn('down', 0.3)}
           initial='hidden'
           animate='show'
           exit='hidden'
           className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores laboriosam ea dolores error repellendus officia quasi ad provident rerum et!
          </motion.p>
          {/* Button */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <MotionDivClient
           variants={fadeIn('down', 0.4)}
           initial='hidden'
           animate='show'
           exit='hidden'
           class_variant='hidden xl:flex'>
            <ProjectsBtn />
          </MotionDivClient>
        </div>
      </div>
      {/* Image */}
      <div className='w-[1200px] h-full absolute right-0 bottom-0'>
        <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'></div>
          {/* Particles */}
          <ParticlesContainer />
          {/* Avatar Img */}
          <motion.div
           variants={fadeIn('up', 0.5)}
           initial='hidden'
           animate='show'
           exit='hidden'
           transition={{ duration: 1, ease: 'easeInOut'}}
           className='w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]'>
            <Avatar />
          </motion.div>
      </div>
    </div>
    </>
  );
}
