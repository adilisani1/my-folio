import React, { useState, useEffect, useRef, useContext } from 'react';
import { motion } from "framer-motion"
import './hero.scss';
import { Social } from '../Navbar/social/Social';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { useLenis } from 'lenis/react';

gsap.registerPlugin(useGSAP);

const Hero = () => {

    const [hoverStyle, setHoverStyle] = useState({ x: 0, y: 0 });
    // const { scroll } = useLocomotiveScroll();

    // const scrollToPortfolio = () => {
    //     if (scroll) {
    //         scroll.scrollTo('#Portfolio');
    //     }

    // };

    const lenis = useLenis();


    // My SLOGAN
    useGSAP(() => {
        const introTimeline = gsap.timeline();
        introTimeline
            .set(".content-width", { opacity: 1 })
            .from(".hero-container", {
                scale: 2,
                opacity: 0,
                ease: "power4.out",
                delay: .3,
                stagger: 1,
            })
            .from('.my-port  img', {
                ease: "power4.in",
                rotation: 360,
                duration: 12,
                repeat: -1,
                ease: 'linear',
            })
    })


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


    return (

        <>
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
                    <a className='resume' download href='/assets/portfolio/projects/adil-resume.pdf'>Resume</a>
                </div>
            </div>


            <section className='hero-section' id='Home'>

                <div className='wrapper' >
                    <div className='textContainer' >
                        <div className='content-width' style={{ opacity: 0 }}>

                            <div className='hero-container'>
                                <div className='hero-me'>
                                    <span className="hero-icon ri-passport-line"></span>
                                    <h4 className='hero-me-title'>
                                        Introduction
                                    </h4>
                                </div>
                                <h1 >I am Muhammad Adil</h1>
                                <h3> Frontend Engineer (ReactJS) - Gamer -<br />DeveloperOnWheels ♿ </h3>

                                <p>Where Passion Meets Precision: Unleashing Innovation from a Wheelchair,
                                    Crafting Seamless Digital Experiences with React JS, Redux & WordPress,
                                    Defying Gravity, Redefining Web Development.
                                </p>
                            </div>


                            <motion.a
                                className='my-port'
                                onClick={() => lenis.scrollTo('#Portfolio', { lerp: 0.001 })} onMouseMove={handleMouseMove}
                                onMouseLeave={handleMouseLeave}
                                style={{ x: hoverStyle.x, y: hoverStyle.y, transition: 'all 0.2s ease-out', cursor: 'pointer' }}>
                                <i className="mouse-scroll ri-arrow-down-s-line"></i>
                                <img className='' ref={portFolioImg} src='/my-portfolio-img.png' alt="Profile Picture" />
                            </motion.a>
                        </div>
                    </div>
                </div>

            </section>
        </>

    )
}

export default Hero;