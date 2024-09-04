
'use client'
import {motion} from 'framer-motion';

import { fadeIn } from "../../../variants";
import Transition from "@/components/Transition";
import WorkSlider from "@/components/WorkSlider";
import Bulb from "@/components/Bulb";
import Circles from "@/components/Circles";

export default function Work() {
    return(
        <>
        <Transition />
        <div className="h-screen bg-primary/30 py-36 flex items-center">
            <Circles />
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-x-8">
                    {/* text */}
                    <div className='text-center flex xl:w-[350px] flex-col lg:text-left mb-4 xl:mb-0'>
                        <motion.h2 
                         variants={fadeIn('up', 0.3)}
                         initial='hidden'
                         animate='show'
                         exit='hidden'
                         className="h2 xl:mt-12">
                            My work <span className='text-accent'>.</span>
                        </motion.h2>
                        <motion.p 
                         variants={fadeIn('up', 0.4)}
                         initial='hidden'
                         animate='show'
                         exit='hidden'
                         className='mb-4 max-w-[350px] mx-auto lg:mx-0'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. A distinctio optio consequuntur perferendis doloremque, provident eligendi hic ipsa nesciunt sed.
                        </motion.p>
                    </div>

                    <motion.div
                     variants={fadeIn('down', 0.6)}
                     initial='hidden'
                     animate='show'
                     exit='hidden'
                     className="w-full xl:max-w-[65%]">
                        {/* slider */}
                        <WorkSlider />
                    </motion.div>
                </div>
            </div>
            <Bulb />
        </div>
        </>
    )
}