'use client'

import { useState } from 'react';
import '../../css/main-menu.css';
import AboutMe from '@/app/components/about_me';
import MyProjects from '@/app/components/my_projects';
import MyContacts from '@/app/components/my_contacts';

export default function MainMenu(){
    const [ currentSlide , setSlide ] = useState("about_me")

    return (
        <div className='relative'>
            <div className='main-menu-title'>
                <h1 className='text-5xl text-white font-lemon_jelly'>Jared Dennis F. Pasiliao</h1>
            </div>
            <div className="main-menu-body">
                <div className="menu-left">
                    {
                        currentSlide === "about_me" ?
                            <AboutMe /> :
                        currentSlide === "my_projects" ?
                            <MyProjects /> :
                        currentSlide === "my_contacts" ?
                            <MyContacts />
                        : null
                    }
                </div>
                <div className="menu-right">
                    <button onClick={() => setSlide("about_me")}>
                        <h1 className="about-me text-5xl text-white font-lemon_jelly">About Me</h1>
                    </button>
                    <button onClick={() => setSlide("my_projects")}>
                        <h1 className="my-projects text-5xl text-white font-lemon_jelly">My Projects</h1>
                    </button>
                    <button onClick={() => setSlide("my_contacts")}>
                        <h1 className="contact-me text-5xl text-white font-lemon_jelly">Contact Me</h1>
                    </button>
                    
                </div>
            </div>
        </div>       
    )
}