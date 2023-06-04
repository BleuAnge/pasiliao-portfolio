'use client'

import { motion } from 'framer-motion';
import { useState } from 'react';
import '../../css/main-menu.css';
import AboutMe from '@/app/components/about_me';
import MyProjects from '@/app/components/my_projects';
import MyContacts from '@/app/components/my_contacts';
import MySkills from '@/app/components/skill-sets';
import Image from 'next/image';

export default function MainMenu(){
    const [ currentSlide , setSlide ] = useState("about_me")

    return (
        <motion.div initial={{ opacity : 0 , y : 40 , x : 40 }}
                    animate={{ opacity : 1 , y : 0 , x : 0 }}
                    exit={{ opacity : 0 , y : 40 , x : 40 }}
                    className='relative main-menu-container'>

            <motion.div initial={{ opacity : 0 , y : -80 }}
                        animate={{ opacity : 1 , y : 0 , transition : { delay : 0.5 } }}
                        exit={{ opacity : 0 , y : 80 }}
                        className='main-menu-title'>
                <h1 className='sm:text-3xl lg:text-5xl text-white font-lemon_jelly'>Jared Dennis F. Pasiliao</h1>
            </motion.div>
            <div className="main-menu-body">
                <div className="menu-left">
                    {
                        currentSlide === "about_me" ?
                            <AboutMe /> :
                        currentSlide === "my_skills" ?
                            <MySkills /> :
                        currentSlide === "my_projects" ?
                            <MyProjects /> :
                        currentSlide === "my_contacts" ?
                            <MyContacts />
                        : null
                    }
                </div>
                <div className="menu-right">
                    <motion.button  initial={{ opacity : 0 , x : 80 }}
                                    animate={{ opacity : 1 , x : 0 , transition : { delay : 0.9 } }}
                                    exit={{ opacity : 0 , y : 80 }}
                                    className="relative" onClick={() => setSlide("about_me")}>
                        {
                            currentSlide === "about_me" ?
                                <motion.span layoutId='underline' className="absolute left-0 top-full block h-[2px] bg-white w-full" />
                            : null
                        }
                        <h1 className="about-me sm:text-xl lg:text-5xl text-white font-lemon_jelly">About Me</h1>
                    </motion.button>
                    <motion.button  initial={{ opacity : 0 , x : 80 }}
                                    animate={{ opacity : 1 , x : 0 , transition : { delay : 1.3 } }}
                                    exit={{ opacity : 0 , y : 80 }}
                                    className="relative" onClick={() => setSlide("my_skills")}>
                        {
                            currentSlide === "my_skills" ?
                                <motion.span layoutId='underline' className="absolute left-0 top-full block h-[2px] bg-white w-full" />
                            : null
                        }
                        <h1 className="skill-set sm:text-xl lg:text-5xl text-white font-lemon_jelly">Programming Skill</h1>
                    </motion.button>
                    <motion.button  initial={{ opacity : 0 , x : 80 }}
                                    animate={{ opacity : 1 , x : 0 , transition : { delay : 1.1 } }}
                                    exit={{ opacity : 0 , y : 80 }}
                                    className="relative" onClick={() => setSlide("my_projects")}>
                        {
                            currentSlide === "my_projects" ?
                                <motion.span layoutId='underline' className="absolute left-0 top-full block h-[2px] bg-white w-full" />
                            : null
                        }
                        <h1 className="my-projects sm:text-xl lg:text-5xl text-white font-lemon_jelly">My Projects</h1>
                    </motion.button>
                    <motion.button  initial={{ opacity : 0 , x : 80 }}
                                    animate={{ opacity : 1 , x : 0 , transition : { delay : 1.3 } }}
                                    exit={{ opacity : 0 , y : 80 }}
                                    className="relative" onClick={() => setSlide("my_contacts")}>
                        {
                            currentSlide === "my_contacts" ?
                                <motion.span layoutId='underline' className="absolute left-0 top-full block h-[2px] bg-white w-full" />
                            : null
                        }
                        <h1 className="contact-me sm:text-xl lg:text-5xl text-white font-lemon_jelly">Contact Me</h1>
                    </motion.button>
                    
                </div>
            </div>
        </motion.div>       
    )
}