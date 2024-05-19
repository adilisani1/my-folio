// Sidebar.jsx
import React, { useEffect, useRef, useState } from 'react';
import './sidebar.scss';
import ToggleButton from './toggleButton/ToggleButton';
import gsap from 'gsap';
import Links from './Links/Links';

const Sidebar = ({ openSide, setOpenSide }) => {

    const bgRef = useRef(null);

    const closeSide = () => {
        setOpenSide(false);
    }

    useEffect(() => {
        if (bgRef.current) {
            if (openSide) {
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
    }, [openSide]);


    return (
        <>

            <div>
                <div ref={bgRef} className={`bg ${!openSide ? 'hidden' : ''}`} key="nav-menu">
                    <Links
                        setOpenSide={setOpenSide} />
                    <div className='closeButton' onClick={closeSide}>
                        <div className='burger'>
                            <div className='burgerActive'></div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
}

export default Sidebar;