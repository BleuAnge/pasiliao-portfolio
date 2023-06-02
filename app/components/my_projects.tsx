'use client'

import { motion } from 'framer-motion';
import '../css/utility.css';

export default function MyProjects() {
    return (
        <motion.h1  initial={{ opacity : 0 , x : -80 }}
                    animate={{ opacity : 1 , x : 0 , transition : { delay : 0.3 } }}
                    exit={{ opacity : 0 , x : -80 }}
                    className='text-title'>
            Coming Soon...
        </motion.h1>
    )
}