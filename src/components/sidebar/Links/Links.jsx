import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';

const Links = () => {
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

    return (
        <div className='links' ref={menuRef}>
            {menuLinks.map((item) => (
                <a
                    key={item}
                    id={item.toLowerCase()}
                    href={`#${item}`}>
                    {item}
                </a>
            ))}
        </div>
    )
}

export default Links;