"use client";
import { motion } from 'framer-motion';
import "./header.css"
import { proza } from './../../fonts.jsx'

function Header() {
    return (
        <div className="header-container">
            <div className="header-wrapper flex">
                <div className="logo-wrapper">
                </div>

                <motion.div
                    className="navbar flex"
                    initial={{ opacity: 0, transform: "translateX(-240px)" }}
                    animate={{ opacity: 1, transform: "translateX(0)" }}
                    transition={{ duration: 1 }}
                >
                    <nav className={proza.className}>
                        <ul className="flex">
                            <li><a href="">Hotels</a></li>
                            <li><a href="">Apartments</a></li>
                            <li><a href="">Villas</a></li>
                            <li><a href="">Budget-Friendly</a></li>
                        </ul>
                    </nav>
                </motion.div>
            </div>
        </div>
    )
}

export default Header