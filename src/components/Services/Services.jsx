import React, { useEffect, useRef } from 'react';
import './sevices.scss';
import { WebDevelopment, CmsDevelopment, LogoDesign, MobileDevelopment } from './../../icons/icons';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
    const myServiceRef = useRef(null);

    const servicesData = [
        {
            title: 'Mobile',
            highlight: 'Development',
            icon: <MobileDevelopment />,
            text: 'I build cross-platform mobile apps using React Native, delivering fast, reliable, and native-like experiences on both iOS and Android devices.',
        },
        {
            title: 'Web',
            highlight: 'Development',
            icon: <WebDevelopment />,
            text: 'My experience in React JS, Next JS, Node JS, Express, and MongoDB allows me to provide complete web development solutions that are customised to meet your requirements.',
        },
        {
            title: 'CMS',
            highlight: 'Development',
            icon: <CmsDevelopment />,
            text: 'Using my CMS development expertise, I provide secure and customisable content management systems that optimise your online presence.',
        },
        {
            title: 'Logo',
            highlight: 'Design',
            icon: <LogoDesign />,
            text: 'My passion is creating visually attractive and memorable logos that perfectly capture your brand identity. Together, let’s design a visually appealing appearance for your company.',
        },
    ];

    // ✅ Same GSAP animation
    useEffect(() => {
        let ctx = gsap.context(() => {
            const servicesItems = gsap.utils.toArray(
                myServiceRef.current.querySelectorAll(".my-services-parent")
            );

            gsap.fromTo(
                servicesItems,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: myServiceRef.current,
                        start: "top 80%",
                        end: "bottom 80%",
                        scrub: true,
                    },
                }
            );
        });

        return () => ctx.revert();
    }, []);

    return (
        <section id='Services' className='services'>
            <div className="services-container">
                <div className='content-width'>
                    <div className='services-text-container'>
                        <div className='services-me'>
                            <span className="services-icon ri-service-line"></span>
                            <p className='services-text'>SERVICES</p>
                        </div>
                    </div>

                    <div>
                        <h2 className='services-title'>My Services</h2>
                    </div>

                    <div className='my-services-container' ref={myServiceRef}>
                        <div className="my-services-parent">
                            {servicesData.slice(0, 2).map((srv, index) => (
                                <div className='my-services-items' key={index}>
                                    <h3 className='my-services-title'>
                                        {srv.title} <span>{srv.highlight}</span>
                                    </h3>
                                    {srv.icon}
                                    <div>
                                        <p className='my-services-text'>{srv.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="my-services-parent">
                            {servicesData.slice(2, 4).map((srv, index) => (
                                <div className='my-services-items' key={index}>
                                    <h3 className='my-services-title'>
                                        {srv.title} <span>{srv.highlight}</span>
                                    </h3>
                                    {srv.icon}
                                    <div>
                                        <p className='my-services-text'>{srv.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
