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
                            <li><a href="https://www.booking.com/searchresults.en-gb.html?aid=8066595&dest_id=-1416533&dest_type=city">Hotels</a></li>
                            <li><a href="https://www.booking.com/searchresults.en-gb.html?aid=8066595&dest_id=-1416533&dest_type=city">Apartments</a></li>
                            <li><a href="https://www.booking.com/searchresults.en-gb.html?aid=8066595&dest_id=-1416533&dest_type=city">Villas</a></li>
                            <li><a href="https://www.booking.com/searchresults.en-gb.html?aid=8066595&dest_id=-1416533&dest_type=city">Budget-Friendly</a></li>
                        </ul>
                    </nav>
                </motion.div>
            </div>
        </div>
    )
}

export default Header