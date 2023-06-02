'use client'

import { motion } from 'framer-motion'
import '../css/utility.css'

export default function AboutMe(){
    return (
        <>
            <motion.p   initial={{ opacity : 0 , x : -80 }}
                        animate={{ opacity : 1 , x : 0 , transition : { delay : 0.3 } }}
                        exit={{ opacity : 0 , x : -80 }}>
                Hello, I'm Jared Dennis F. Pasiliao, an exceptionally passionate and talented programmer specializing in web development. 
                With a strong understanding of the latest technologies and a knack for quick adaptation, I consistently find innovative ways to leverage them in my work. 
                I pride myself on my ability to create secure and efficient backend servers, ensuring optimal performance and safeguarding sensitive data. 
                Additionally, my frontend skills are second to none, enabling me to design captivating user interfaces that enhance the overall user experience. 
                With my comprehensive expertise and unwavering dedication to excellence, I am the ideal candidate to take your projects to new heights.
            </motion.p>
        </>
    )
}