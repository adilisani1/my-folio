// Sidebar.jsx
import React, { useEffect, useRef, useState } from 'react';
import './sidebar.scss';
import ToggleButton from './toggleButton/ToggleButton';
import gsap from 'gsap';
import Links from './Links/Links';



const Sidebar = () => {

    const [openNav, setOpenNav] = useState(false);
    const bgRef = useRef(null);

    const toggleNav = () => {
        setOpenNav((prev) => !prev);
    }

    useEffect(() => {
        if (bgRef.current) {
            if (openNav) {
                gsap.to(bgRef.current, {
                    x: 0,
                    autoAlpha: 1,
                    duration: 1,
                    ease: 'bounce.out',
                });
            } else {
                gsap.to(bgRef.current, {
                    x: '100%',
                    autoAlpha: 0,
                    duration: 1,
                    ease: 'power3.out',
                });
            }
        }
    }, [openNav]);

    return (
        <>
            <div>
                <div ref={bgRef} className={`bg ${!openNav ? 'hidden' : ''}`} key="nav-menu">
                    <Links />
                </div>
            </div>
            <ToggleButton openNav={openNav} toggleNav={toggleNav} />
        </>
    );
}

export default Sidebar;