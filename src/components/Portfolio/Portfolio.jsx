import React, { useRef } from 'react'
import './portfolio.scss';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import portfolioImgOne from '/portfolio-img.webp';
import portfolioImgTwo from '/portfolio-img2.webp';
import portfolioImgThree from '/portfolio-img3.webp';
gsap.registerPlugin(useGSAP, ScrollTrigger);

const Portfolio = () => {

    const projects = [
        {
            id: 1,
            title: "React Commerce",
            img: portfolioImgOne,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
        },
        {
            id: 2,
            title: "Next.js Blog",
            img: portfolioImgTwo,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
        },
        {
            id: 3,
            title: "Vanilla JS App",
            img: portfolioImgThree,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
        },
        {
            id: 4,
            title: "Music App",
            img: portfolioImgThree,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
        },
    ];



    const porfolioContainer = useRef();

    useGSAP(() => {

    }, { scope: porfolioContainer });



    return (
        <div className='portfolio'>
            <div className="portfolio-container" ref={porfolioContainer}>
                <div className='content-width'>

                    {/* <div className='portfolio-work-wrapper'>
                        {projects.map((project, index) => (
                            <div key={project.id} className={`portfolio-work `}>
                                <div className='portfolio-work-image'>
                                    <img className='portfolio-img' src={project.img} alt={project.title} />
                                    <div className='portfolio-overlay'>
                                        <div className='portfolio-title'>{project.title}</div>
                                        <p className='portfolio-desc'>{project.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className='more-work-wrapper'>

                            <a href="#" className='more-work-btn'>
                                <span className="box">
                                    <i className="arrow ri-arrow-right-up-line"></i>
                                    <span className="textmore">
                                        Click More Work
                                    </span>
                                </span>
                            </a>
                        </div>
                    </div> */}
                    <div className='portfolio-list'>
                        <div className='portfolio-wrapper'>
                            <div className='portfolio-me'>
                                <span className="portfolio-icon ri-file-ppt-line"></span>
                                <p className='portfolio-text'>Portfolio</p>
                            </div>
                            <h2 className='portfolio-title'>My Portfolio</h2>
                            {/* Card One */}
                            <div className='portfolio-card'>
                                <figure className='card-banner img-holder has-before' style={{ '--width': 700, '--height': 605 }}>
                                    <img className='img-cover' width="700" height="605" src="/portfolio-1.jpg" alt="Ecommerce Project" />
                                </figure>
                                <div className='card-content'>
                                    <h3>
                                        <a href="#" className='card-title'>Ecommerce</a>
                                    </h3>
                                    <p className='card-tag'>store</p>
                                </div>
                                <a href='#' className='see-more'>
                                    <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z" fillRule="nonzero" />
                                    </svg>
                                </a>
                            </div>

                            {/* Card Two */}
                            <div className='portfolio-card'>
                                <figure className='card-banner img-holder has-before' style={{ '--width': 700, '--height': 1091 }}>
                                    <img className='img-cover' width="700" height="1091" src="/portfolio-2.jpg" alt="Food App Project" />
                                </figure>
                                <div className='card-content'>
                                    <h3>
                                        <a href="#" className='card-title'>Food App</a>
                                    </h3>
                                    <p className='card-tag'>food</p>
                                </div>
                                <a href='#' className='see-more'>
                                    <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z" fillRule="nonzero" />
                                    </svg>
                                </a>
                            </div>
                        </div>


                        <div className='portfolio-wrapper'>

                            {/* Card One */}
                            <div className='portfolio-card'>
                                <figure className='card-banner img-holder has-before' style={{ '--width': 700, '--height': 1000 }}>
                                    <img className='img-cover' width="700" height="1000" src="/portfolio-3.jpg" alt="Ecommerce Project" />
                                </figure>
                                <div className='card-content'>
                                    <h3>
                                        <a href="#" className='card-title'>Ecommerce</a>
                                    </h3>
                                    <p className='card-tag'>store</p>
                                </div>
                                <a href='#' className='see-more'>
                                    <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z" fillRule="nonzero" />
                                    </svg>
                                </a>
                            </div>

                            {/* Card Two */}
                            <div className='portfolio-card'>
                                <figure className='card-banner img-holder has-before' style={{ '--width': 700, '--height': 850 }}>
                                    <img className='img-cover' width="700" height="850" src="/portfolio-4.jpg" alt="Food App Project" />
                                </figure>
                                <div className='card-content'>
                                    <h3>
                                        <a href="#" className='card-title'>Food App</a>
                                    </h3>
                                    <p className='card-tag'>food</p>
                                </div>
                                <a href='#' className='see-more'>
                                    <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z" fillRule="nonzero" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                    </div>



                </div>

            </div>
        </div>
    );
}

export default Portfolio