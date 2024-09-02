'use client'

import {motion} from 'framer-motion';

interface Props {
  children: React.ReactNode;
}

const Transition = ( {children}: Props ) => {
  return (
    <motion.div
     initial={{ y: 20, opacity: 0}}
     animate={{ y: 0, opacity: 1}}
     transition={{ease: 'easeInOut', duration: 1 }}>
      {children}
    </motion.div>
  )
}

export default Transition