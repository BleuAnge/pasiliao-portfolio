'use client'

import { FC } from "react";
import { motion } from "framer-motion"
import Link from "next/link";
import "../css/utility.css";

export default function MyContacts() {
    return (
        <motion.div initial={{ opacity : 0 , x : -80 }}
                    animate={{ opacity : 1 , x : 0 , transition : { delay : 0.3 } }}
                    exit={{ opacity : 0 , x : -80 }}
                    className="item-container">
            <div>
                <h1 className="text-label">Email: </h1>
                <p className="text-contact">jaredpasiliao52@gmail.com</p>
            </div>
            <div>
                <h1 className="text-label">Github: </h1>
                <Link href="https://github.com/BleuAnge">
                    <p className="text-contact">BleuAnge</p>
                </Link>
            </div>
            <div>
                <h1 className="text-label">LinkedIn: </h1>
                <Link href="https://www.linkedin.com/in/jared-dennis-pasiliao-306157278">
                    <p className="text-contact">Jared Dennis F. Pasiliao</p>
                </Link>
            </div>
        </motion.div>
    )
}