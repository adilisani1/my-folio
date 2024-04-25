import React, { useEffect, useRef, useState } from 'react'
import './portfolio.scss';
import { motion } from "framer-motion"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { portfolioData } from '../../data/projects';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Portfolio = () => {
    const porfolioContainer = useRef();
    const [hoverStyle, setHoverStyle] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;
        setHoverStyle({
            x: x * 0.2,
            y: y * 0.2
        });
    };

    const handleMouseLeave = () => {
        setHoverStyle({ x: 0, y: 0 });
    };


    const downArrowVariants = {
        scrollDown: {
            y: 10,
            opacity: 0,
            transition: {
                duration: 2,
                repeat: Infinity
            }
        }
    }

    useGSAP(() => {

    }, { scope: porfolioContainer });
    return (
        <section
            id='Portfolio'
            className='portfolio '
            ref={porfolioContainer}
            data-scroll-section >
            <div className="portfolio-container" >
                <div className='content-width'>
                    {/* <div className='portfolio-list'>
                        <div className='portfolio-wrapper'>
                            <div className='portfolio-me'>
                                <span className="portfolio-icon ri-file-ppt-line"></span>
                                <p className='portfolio-text'>Portfolio</p>
                            </div>
                            <h2 className='portfolio-title'>My Portfolio</h2>

                            <div className='portfolio-card'>
                                <figure className='card-banner img-holder has-before' style={{ '--width': 700, '--height': 605 }}>
                                    <img className='img-cover' width="700" height="605" src="/portfolio-three.jpg" alt="Ecommerce Project" />
                                </figure>
                                <div className='card-content'>
                                    <h3>
                                        <a href="https://ecommerce-frontend-git-master-adilisani1s-projects.vercel.app/" target='_blank' className='card-title'>Ecommerce </a>
                                    </h3>
                                    <p className='card-tag'>store</p>
                                </div>
                                <a href="https://ecommerce-frontend-git-master-adilisani1s-projects.vercel.app/" target='_blank' className='see-more'>
                                    <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z" fillRule="nonzero" />
                                    </svg>
                                </a>
                            </div>

                            <div className='portfolio-card'>
                                <figure className='card-banner img-holder has-before' style={{ '--width': 700, '--height': 1091 }}>
                                    <img className='img-cover' width="700" height="1091" src="/portfolio-one1.jpg" alt="Food App Project" />
                                </figure>
                                <div className='card-content'>
                                    <h3>
                                        <a href="https://foodiemern-front-end.vercel.app/" target='_blank' className='card-title'>Food App</a>
                                    </h3>
                                    <p className='card-tag'>food</p>
                                </div>
                                <a href="https://foodiemern-front-end.vercel.app/" target='_blank' className='see-more'>
                                    <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z" fillRule="nonzero" />
                                    </svg>
                                </a>
                            </div>
                        </div>


                        <div className='portfolio-wrapper'>

                            <div className='portfolio-card'>
                                <figure className='card-banner img-holder has-before' style={{ '--width': 700, '--height': 1000 }}>
                                    <img className='img-cover' width="700" height="1000" src="/portfolio-5.png" alt="Ecommerce Project" />
                                </figure>
                                <div className='card-content'>
                                    <h3>
                                        <a href="https://weather-application-ochre.vercel.app/" target='_blank' className='card-title'>Weather App</a>
                                    </h3>
                                    <p className='card-tag'>general</p>
                                </div>
                                <a href="https://weather-application-ochre.vercel.app/" target='_blank' className='see-more'>
                                    <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z" fillRule="nonzero" />
                                    </svg>
                                </a>
                            </div>


                            <div className='portfolio-card'>
                                <figure className='card-banner img-holder has-before' style={{ '--width': 700, '--height': 850 }}>
                                    <img className='img-cover' width="700" height="850" src="/portfolio-4.jpg" alt="Food App Project" />
                                </figure>
                                <div className='card-content'>
                                    <h3>
                                        <a href="#" className='card-title'>More App</a>
                                    </h3>
                                    <p className='card-tag'>more</p>
                                </div>
                                <a href='#' className='see-more'>
                                    <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z" fillRule="nonzero" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                    </div> */}
                    <div className='portfolio-list'>
                        {portfolioData.map(wrapper => (
                            <div key={wrapper.id} className='portfolio-wrapper'>
                                {wrapper.projects.map(project => (
                                    <div key={project.id} className='portfolio-card'>
                                        <figure className='card-banner img-holder has-before' style={{ '--width': project.width, '--height': project.height }}>
                                            <img className='img-cover' width={project.width} height={project.height} src={project.imgSrc} alt={project.alt} />
                                        </figure>
                                        <div className='card-content'>
                                            <h3>
                                                <a href={project.link} target='_blank' rel="noopener noreferrer" className='card-title'>{project.title}</a>
                                            </h3>
                                            <p className='card-tag'>{project.tag}</p>
                                        </div>
                                        <a href={project.link} target='_blank' rel="noopener noreferrer" className='see-more'>
                                            <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z" fillRule="nonzero" />
                                            </svg>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                    <motion.div

                        className='more-project-wrapper'>
                        <motion.a
                            href="#"
                            className="more-projects"

                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            style={{ x: hoverStyle.x, y: hoverStyle.y, transition: 'all 0.2s ease-out' }}>
                            <span class="btn-circle-text">
                                Explore <br /> All Project
                                <motion.span
                                    class="arrow-down"
                                    variants={downArrowVariants}
                                    animate='scrollDown'
                                >
                                    <svg
                                        version="1.1"
                                        viewBox="0 0 330 330"
                                        xmlSpace="preserve"
                                    >
                                        <path
                                            d="M154.394,325.606C157.322,328.535,161.161,330,165,330s7.678-1.465,10.607-4.394l75-75
	c5.858-5.857,5.858-15.355,0-21.213c-5.858-5.857-15.356-5.857-21.213,0L180,278.787V15c0-8.284-6.716-15-15-15
	c-8.284,0-15,6.716-15,15v263.787l-49.394-49.394c-5.858-5.857-15.355-5.857-21.213,0c-5.858,5.857-5.858,15.355,0,21.213
	L154.394,325.606z"
                                        />
                                    </svg>
                                </motion.span>
                            </span>

                        </motion.a>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}

export default Portfolio