import React, { useEffect, useRef, useState } from 'react'
import './portfolio.scss';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { portfolioData } from '../../data/projects';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Portfolio = () => {

    const [projects, setProjects] = useState(portfolioData);
    const [pages, setPages] = useState(1);

    //Categories
    const [activeCategory, setActiveCategory] = useState('All');

    var filteredCat = ['All', ...new Set(portfolioData.map((project) => project.category))]

    const handleCategoryClick = category => {
        if (category === 'All') {
            setProjects(portfolioData);
        } else {
            setProjects(portfolioData.filter(project => project.category === category));
        }
        setActiveCategory(category);
    };


    const handlePageSelect = page => {
        setPages(page + 1);
    }

    return (
        <section
            id='Portfolio'
            className='portfolio '
            data-scroll-section >
            <div className="portfolio-container" >
                <div className='content-width'>
                    <div className='portfolio-me' data-scroll data-scroll-speed="0.5" data-scroll-direction='vertical'>
                        <span className="portfolio-icon ri-file-ppt-line" ></span>
                        <p className='portfolio-text'>Portfolio</p>
                    </div>
                    <h2 className='portfolio-title' data-scroll data-scroll-direction='vertical'>My Portfolio</h2>
                    <div className="portfolio-category">
                        <ul>
                            {filteredCat.map((category) => (
                                <li key={category.id}>
                                    <button
                                        className={activeCategory === category ? 'active' : ''}
                                        onClick={() => handleCategoryClick(category)}>
                                        {category.toUpperCase()}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='portfolio-list'>
                        {projects.map(project => (
                            <div className='portfolio-wrapper' key={project.id}>
                                <div className='portfolio-card ' data-scroll data-scroll-direction='vertical'>
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
                            </div>

                        ))}

                    </div>

                    <div className='pagination-area'>
                        <ul className="pagination">
                            <li className="page-item">
                                <button className="page-link" >
                                    01
                                </button>
                            </li>
                            <li className="page-item">
                                <button className="page-link">
                                    02
                                </button>
                            </li>
                            <li className="page-item">
                                <button className="page-link" >
                                    03
                                </button>
                            </li>
                            <li className="page-item">
                                <a className="page-link" >
                                    04
                                </a>
                            </li>
                        </ul>

                    </div>
                    {/* 
                    {projects.length < visibleCount && (
                        <motion.div className='more-project-wrapper'>
                            <motion.a
                                onClick={showMoreHandler}
                                href="#"
                                className="more-projects"
                                onMouseMove={handleMouseMove}
                                onMouseLeave={handleMouseLeave}
                                style={{ x: hoverStyle.x, y: hoverStyle.y, transition: 'all 0.2s ease-out' }}>
                                <span className="btn-circle-text">
                                    Explore <br /> All Project
                                    <motion.span
                                        className="arrow-down"
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
                    )} */}

                </div>

            </div>
        </section >
    );
}

export default Portfolio