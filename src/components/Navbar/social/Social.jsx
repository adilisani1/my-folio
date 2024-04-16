import React, { useEffect, useRef } from 'react'
import DarkMode from './../../Darkmode/DarkMode';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const Social = () => {
    const socialIco = useRef();
    const socialIcons = [
        { name: 'github', iconClass: 'ri-github-fill social-icon', url: "https://github.com/adilisani1" },
        { name: 'linkedin', iconClass: 'ri-linkedin-fill social-icon', url: "https://www.linkedin.com/in/aadil-isani/" },
        { name: 'behance', iconClass: 'ri-behance-fill social-icon', url: "https://www.behance.net/adiisani" },
        { name: 'whatsapp', iconClass: 'ri-whatsapp-fill social-icon', url: "https://wa.me/+923213427371" }
    ]

    useGSAP(() => {
        gsap.to(socialIco.current, {
            duration: 0.8,
            opacity: 1,
            y: 5,
            ease: "elastic.out(1, 0.3)",
            stagger: 0.5
        });
    }, {});
    return (

        <div ref={socialIco}
            className='social'>
            {/* <DarkMode /> */}
            {socialIcons.map((icon, index) => {
                const { iconClass, url } = icon;
                return (
                    <a
                        key={index}
                        href={url}
                        target="_blank"
                    >

                        <i className={`${iconClass}`}></i>
                    </a>

                );
            })}

        </div>

    )
}
