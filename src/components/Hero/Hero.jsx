import React, { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion"
import './hero.scss';
import { Social } from '../Navbar/social/Social';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Hero = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(window.matchMedia("(max-width: 1024px)").matches);
    const [hoverStyle, setHoverStyle] = useState({ x: 0, y: 0 });

    const portFolioImg = useRef();

    const handleMouseMove = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;
        setHoverStyle({
            x: x * 0.1,
            y: y * 0.1
        });
    };

    const handleMouseLeave = () => {
        setHoverStyle({ x: 0, y: 0 });
    };

    useGSAP(() => {
        gsap.to('.my-port img', {
            rotation: 360,
            duration: 12,
            repeat: -1,
            ease: 'linear',
        });
    }, {});

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 1024px)");
        const handleResize = () => {
            setIsSmallScreen(mediaQuery.matches);
        };

        mediaQuery.addListener(handleResize);
        handleResize();

        return () => {
            mediaQuery.removeListener(handleResize);
        };
    }, []);

    return (
        <section {...(isSmallScreen ? { 'data-scroll-section': true } : {})}>
            <div className='left-side' >
                <div className='top-part '>
                    <a className='logo '>
                        <img style={{ width: "55px" }} src='/ad-logo.png' alt='adlogo' />
                    </a>
                    <p>Frontend Engineer <br /> ( ReactJS ) </p>
                </div>
                <div className=''>
                    <img className='prof-img' src='/my-self.jpg' alt="Profile Picture" width={300} height={300} />
                </div>
                <div className='bottom-part '>
                    <p>adil.isani1@gmail.com</p>
                    <span>Karachi, Pakistan </span>
                </div>
                <Social />
                <div className='resume-button'>
                    <a className='resume' href='#resume'>Resume</a>
                </div>
            </div>
            <div className='wrapper' {...(!isSmallScreen ? { 'data-scroll-section': true } : {})}>
                <div className='textContainer' >
                    <div className='content-width'>
                        <h1 >I am Muhammad Adil</h1>
                        <h3> Frontend Engineer (ReactJS) - Gamer -<br />DeveloperOnWheels ♿ </h3>

                        <p>Where Passion Meets Precision: Unleashing Innovation from a Wheelchair,
                            Crafting Seamless Digital Experiences with React JS, Redux & WordPress,
                            Defying Gravity, Redefining Web Development.
                        </p>
                        <motion.a
                            className='my-port'
                            href='#Portfolio'
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            style={{ x: hoverStyle.x, y: hoverStyle.y, transition: 'all 0.2s ease-out' }}
                        // ref={portFolioLinkRef}


                        >
                            <i className="mouse-scroll ri-arrow-down-s-line"></i>
                            <img className='' ref={portFolioImg} src='/my-portfolio-img.png' alt="Profile Picture" />
                        </motion.a>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Hero