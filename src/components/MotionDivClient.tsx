import { animate, AnimationProps } from 'framer-motion';
'use client'

import {motion} from 'framer-motion';

interface Props {
    variants?: AnimationProps["variants"];
    initial?: string;
    animate?: string;
    exit?: string;
    class_variant?: string;
    children?: React.ReactNode;
}


const MotionDivClient = ( { variants, initial, animate, exit, class_variant, children }: Props ) => {
  return (
    <motion.div
        variants={variants ?? undefined}
        initial={initial ?? ''}
        animate={animate ?? ''}
        exit={exit ?? ''}
        className={class_variant ?? ''}>
        {children ?? ''}    
    </motion.div>
  )
}

export default MotionDivClient