import React, { useEffect, useRef } from 'react';
import './hero.scss';
import { Social } from '../Navbar/social/Social';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Hero = () => {
    const portFolioImg = useRef();
    const portFolioLinkRef = useRef(null);

    useGSAP(() => {
        gsap.to('.my-port img', {
            rotation: 360,
            duration: 12,
            repeat: -1,
            ease: 'linear',
        });
    }, {});


    useEffect(() => {
        const link = portFolioLinkRef.current;

        const handleHoverEnter = (e) => {
            const buttonRect = link.getBoundingClientRect();
            const centerX = buttonRect.left + buttonRect.width / 2;
            const centerY = buttonRect.top + buttonRect.height / 2;
            const hoverX = e.clientX;
            const hoverY = e.clientY;
            const distanceX = (hoverX - centerX) / (buttonRect.width / 2);
            const distanceY = (hoverY - centerY) / (buttonRect.height / 2);
            const movementFactor = 20;

            gsap.to(link, {
                duration: 0.5,
                ease: 'power1.out',
                x: distanceX * movementFactor,
                y: distanceY * movementFactor,
            });
        };

        const handleHoverLeave = () => {
            gsap.to(link, {
                duration: 0.5,
                ease: 'power1.out',
                x: 0,
                y: 0,
            });
        };

        link.addEventListener('mouseenter', handleHoverEnter);
        link.addEventListener('mouseleave', handleHoverLeave);

        return () => {
            link.removeEventListener('mouseenter', handleHoverEnter);
            link.removeEventListener('mouseleave', handleHoverLeave);
        };
    }, []);

    return (
        <div>
            <div className='left-side'>
                <div className='top-part '>
                    <a className='logo '>
                        <img style={{ width: "55px" }} src='/ad-logo.png' alt='adlogo' />
                    </a>
                    <p>Frontend Engineer <br /> ( ReactJS ) </p>
                </div>
                <div className=''>
                    <img className='prof-img' src='/public/my-self.jpg' alt="Profile Picture" width={300} height={300} />
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
            <div className='wrapper'>
                <div className='textContainer' >
                    <div className='content-width'>
                        <h1 >I am Muhammad Adil</h1>
                        <h3> Frontend Engineer (ReactJS) - Gamer -<br />DeveloperOnWheels ♿ </h3>

                        <p>Where Passion Meets Precision: Unleashing Innovation from a Wheelchair, <br />
                            Crafting Seamless Digital Experiences with React JS, Redux & WordPress,<br />
                            Defying Gravity, Redefining Web Development.
                        </p>
                        <a className='my-port'
                            href='#portfolio'
                            ref={portFolioLinkRef}

                        >
                            <i className="mouse-scroll ri-arrow-down-s-line"></i>
                            <img className='' ref={portFolioImg} src='/my-portfolio-img.png' alt="Profile Picture" />
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero