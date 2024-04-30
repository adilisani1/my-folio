import React, { useEffect, useRef } from 'react'
import DarkMode from './../../Darkmode/DarkMode';
import { motion } from "framer-motion";

export const Social = () => {
    const socialIco = useRef();
    const socialIcons = [
        { name: 'github', iconClass: 'ri-github-fill social-icon', url: "https://github.com/adilisani1" },
        { name: 'linkedin', iconClass: 'ri-linkedin-fill social-icon', url: "https://www.linkedin.com/in/aadil-isani/" },
        { name: 'behance', iconClass: 'ri-behance-fill social-icon', url: "https://www.behance.net/adiisani" },
        { name: 'whatsapp', iconClass: 'ri-whatsapp-fill social-icon', url: "https://wa.me/+923213427371" }
    ]

    // useGSAP(() => {
    //     gsap.to(socialIco.current, {
    //         duration: 0.8,
    //         opacity: 1,
    //         y: 5,
    //         ease: "elastic.out(1, 0.3)",
    //         stagger: 0.5
    //     });
    // }, {});


    return (

        <motion.div

            className='social'>
            {/* <DarkMode /> */}
            {socialIcons.map((icon, index) => {
                const { iconClass, url } = icon;
                return (
                    <motion.a
                        key={index}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ rotate: 360, transition: { duration: 0.05, ease: "linear" } }}
                        initial={{ opacity: 0, y: 100, rotate: 0 }}
                        animate={{ opacity: 1, y: -5, transition: { type: "spring", duration: 0.05, ease: "easeInOut", stiffness: 300, damping: 30 } }}>
                        <i className={`${iconClass}`}></i>
                    </motion.a>

                );
            })}

        </motion.div>

    )
}
