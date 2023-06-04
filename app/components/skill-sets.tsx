'use client'

import { motion } from 'framer-motion'
import Image from 'next/image';
import Link from "next/link";
import "../css/utility.css";

export default function MySkills() {
    return (
        <motion.div initial={{ opacity : 0 , x : -80 }}
                    animate={{ opacity : 1 , x : 0 , transition : { delay : 0.3 } }}
                    exit={{ opacity : 0 , x : -80 }}
                    className="item-container gap-4">
            <h1>Programming Languages: </h1>
            <table className="w-full p-2 bg-gray-300 border-2 border-white">
                <colgroup>
                    <col width="20%"></col>
                    <col width="20%"></col>
                    <col width="20%"></col>
                    <col width="20%"></col>
                    <col width="20%"></col>
                </colgroup>
                <tr>
                    <motion.td  animate={{  scale: [.5, 1, 1, .5, 1],
                                            rotate: [0, 0, 270, 270, 0],}}
                                colSpan={2} className='p-1'>
                        <Image  className='block mx-auto' 
                                src="/C.png"
                                width="64"
                                height="64"
                                alt='Profile'/>
                    </motion.td>
                    <motion.td  animate={{  scale: [.5, 1, 1, .5, 1],
                                            rotate: [0, 0, 270, 270, 0],}}
                                colSpan={1} className='p-1'>
                        <Image  className='block mx-auto'
                                src="/C++.png"
                                width="64"
                                height="64"
                                alt='Profile'/>
                    </motion.td>
                    <motion.td  animate={{  scale: [.5, 1, 1, .5, 1],
                                            rotate: [0, 0, 270, 270, 0],}}
                                colSpan={2} className='p-1'>
                        <Image  className='block mx-auto'
                                src="/CSharp.png"
                                width="64"
                                height="64"
                                alt='Profile'/>
                    </motion.td>
                </tr>
                <tr>
                    <motion.td  animate={{  scale: [.5, 1, 1, .5, 1],
                                            rotate: [0, 0, 270, 270, 0],}}
                                colSpan={2} className='p-1'>
                        <Image  className='block mx-auto'
                                src="/Java.png"
                                width="64"
                                height="64"
                                alt='Profile'/>
                    </motion.td>
                    <motion.td  animate={{  scale: [.5, 1, 1, .5, 1],
                                            rotate: [0, 0, 270, 270, 0],}}
                                colSpan={1} className='p-1'>
                        <Image  className='block mx-auto'
                                src="/Python.png"
                                width="64"
                                height="64"
                                alt='Profile'/>
                    </motion.td>
                    <motion.td  animate={{  scale: [.5, 1, 1, .5, 1],
                                            rotate: [0, 0, 270, 270, 0],}}
                                colSpan={2} className='p-1'>
                        <Image  className='block mx-auto'
                                src="/Kotlin.png"
                                width="64"
                                height="64"
                                alt='Profile'/>
                    </motion.td>
                </tr>
                <tr>
                    <motion.td  animate={{  scale: [.5, 1, 1, .5, 1],
                                            rotate: [0, 0, 270, 270, 0],}}
                                className='p-1'>
                        <Image  className='block mx-auto'
                                src="/HTML5.png"
                                width="64"
                                height="64"
                                alt='Profile'/>
                    </motion.td>
                    <motion.td  animate={{  scale: [.5, 1, 1, .5, 1],
                                            rotate: [0, 0, 270, 270, 0],}}
                                className='p-1'>
                        <Image  className='block mx-auto'
                                src="/CSS3.png"
                                width="64"
                                height="64"
                                alt='Profile'/>
                    </motion.td>
                    <motion.td  animate={{  scale: [.5, 1, 1, .5, 1],
                                            rotate: [0, 0, 270, 270, 0],}}
                                className='p-1'>
                        <Image  className='block mx-auto'
                                src="/Javascript.png"
                                width="64"
                                height="64"
                                alt='Profile'/>
                    </motion.td>
                    <motion.td  animate={{  scale: [.5, 1, 1, .5, 1],
                                            rotate: [0, 0, 270, 270, 0],}}
                                className='p-1'>
                        <Image  className='block mx-auto'
                                src="/Typescript.png"
                                width="64"
                                height="64"
                                alt='Profile'/>
                    </motion.td>
                    <motion.td  animate={{  scale: [.5, 1, 1, .5, 1],
                                            rotate: [0, 0, 270, 270, 0],}}
                                className='p-1'>
                        <Image  className='block mx-auto'
                                src="/PHP.png"
                                width="64"
                                height="64"
                                alt='Profile'/>
                    </motion.td>
                </tr>
            </table>

            <h1>Frameworks and Libraries: </h1>
            <table className="w-full p-2 bg-gray-300 border-2 border-white">
                <tr>
                    <motion.td  animate={{  scale: [.5, 1, 1, .5, 1],
                                            rotate: [0, 0, 270, 270, 0],}}
                                className='p-1'>
                        <Image  className='block mx-auto'
                                src="/React.png"
                                width="64"
                                height="64"
                                alt='Profile'/>
                    </motion.td>
                    <motion.td  animate={{  scale: [.5, 1, 1, .5, 1],
                                            rotate: [0, 0, 270, 270, 0],}}
                                className='p-1'>
                        <Image  className='block mx-auto'
                                src="/Nextjs.png"
                                width="64"
                                height="64"
                                alt='Profile'/>
                    </motion.td>
                    <motion.td  animate={{  scale: [.5, 1, 1, .5, 1],
                                            rotate: [0, 0, 270, 270, 0],}}
                                className='p-1'>
                        <Image  className='block mx-auto'
                                src="/Vite.png"
                                width="64"
                                height="64"
                                alt='Profile'/>
                    </motion.td>
                </tr>
                <tr>
                    <motion.td  animate={{  scale: [.5, 1, 1, .5, 1],
                                            rotate: [0, 0, 270, 270, 0],}}
                                className='p-1'>
                        <Image  className='block mx-auto'
                                src="/Node.png"
                                width="64"
                                height="64"
                                alt='Profile'/>
                    </motion.td>
                    <motion.td  animate={{  scale: [.5, 1, 1, .5, 1],
                                            rotate: [0, 0, 270, 270, 0],}}
                                className='p-1'>
                        <Image  className='block mx-auto'
                                src="/Django.png"
                                width="64"
                                height="64"
                                alt='Profile'/>
                    </motion.td>
                    <motion.td  animate={{  scale: [.5, 1, 1, .5, 1],
                                            rotate: [0, 0, 270, 270, 0],}}
                                className='p-1'>
                        <Image  className='block mx-auto'
                                src="/Laravel.png"
                                width="64"
                                height="64"
                                alt='Profile'/>
                    </motion.td>
                </tr>
            </table>

            <h1>Database and Database Managers: </h1>
            <table className="w-full p-2 bg-gray-300 border-2 border-white">
                <tr>
                    <motion.td className='p-1'>
                        <Image  className='block mx-auto'
                                src="/MySQL.png"
                                width="64"
                                height="64"
                                alt='Profile'/>
                    </motion.td>
                    <motion.td className='p-1'>
                        <Image  className='block mx-auto'
                                src="/Postgres.png"
                                width="64"
                                height="64"
                                alt='Profile'/>
                    </motion.td>
                    <motion.td className='p-1'>
                        <Image  className='block mx-auto'
                                src="/SQLite.png"
                                width="64"
                                height="64"
                                alt='Profile'/>
                    </motion.td>
                    <motion.td className='p-1'>
                        <Image  className='block mx-auto'
                                src="/MongoDB.png"
                                width="64"
                                height="64"
                                alt='Profile'/>
                    </motion.td>
                </tr>
                <tr>
                    <motion.td className='p-1'>
                        <Image  className='block mx-auto'
                                src="/PHPMyAdmin.png"
                                width="64"
                                height="64"
                                alt='Profile'/>
                    </motion.td>
                    <motion.td className='p-1'>
                        <Image  className='block mx-auto'
                                src="/Supabase.png"
                                width="64"
                                height="64"
                                alt='Profile'/>
                    </motion.td>
                    <motion.td className='p-1'>
                        <Image  className='block mx-auto'
                                src="/Pocketbase.png"
                                width="64"
                                height="64"
                                alt='Profile'/>
                    </motion.td>
                    <motion.td className='p-1'>
                        <Image  className='block mx-auto'
                                src="/Prisma.png"
                                width="64"
                                height="64"
                                alt='Profile'/>
                    </motion.td>
                </tr>
            </table>
        </motion.div>
    )
}