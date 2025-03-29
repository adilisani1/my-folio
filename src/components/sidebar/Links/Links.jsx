import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import { useLenis } from 'lenis/react';

const Links = ({ setOpenSide }) => {
    const lenis = useLenis(); 

    const menuRef = useRef(null);
    const menuLinks = ['Home', 'About', 'Services', 'Resume', 'Portfolio', 'Contact'];

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
        tl.from(menuRef.current.children, {
            opacity: 0,
            duration: .6,
            stagger: 0.1,
        });
        tl.to(menuRef.current.children, {
            y: 0,
            opacity: 1,
            duration: .6,
            stagger: 0.1,
        });
    }, []);

    const handleNavigation = (event, item) => {
        event.preventDefault();

        const section = document.querySelector(`#${item}`);
        if (section && lenis) {

            lenis.scrollTo(section, {
                lerp: 0.0001,
                duration: 3,
                offset: -40
            });
        }

        setOpenSide(false);
    };
    return (

        <div className='links' ref={menuRef}>
            {menuLinks.map((item) => (
                <a
                    key={item}
                    href={`#${item}`}
                    onClick={(event) => handleNavigation(event, item)}>
                    {item}
                </a>
            ))}
        </div>
    )
}

export default Links;