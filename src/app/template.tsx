'use client'

import {AnimatePresence, motion} from 'framer-motion';

//variants
const transitionVariants = {
    initial: {
      x: '100%',
      width: '100%'
    },
    animate: {
      x: '0%',
      width: '0%'
    },
    exit: {
      x: ['0%', '100%'],
      width: ['0%', '100%']
    }
  }

interface Props {
  children: React.ReactNode;
}

const Template = ( {children}: Props ) => {
  return (
    // <AnimatePresence>
    //     <motion.div
    //         initial={{ y: 20, opacity: 0}}
    //         animate={{ y: 0, opacity: 1}}
    //         transition={{ease: 'easeInOut', duration: 1 }}>
    //         {children}
    // </motion.div>
    // </AnimatePresence>

    // <AnimatePresence mode='wait'>
    <>
        <AnimatePresence>
        <motion.div key='unique-1' className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#2e2257]"
         initial={transitionVariants.initial}
         animate={transitionVariants.animate}
         exit={transitionVariants.exit}
         transition={ { delay: 0.2, duration: 0.6, ease: 'easeInOut'} }>
        </motion.div>
        {children}
        </AnimatePresence>
        
    </>
    
    // </AnimatePresence>
  )
}

export default Template