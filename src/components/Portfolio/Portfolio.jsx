import React, { useState } from 'react';
import './portfolio.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { portfolioData } from '../../data/projects';

gsap.registerPlugin(ScrollTrigger);

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
        setPages(1)
    };


    //Pagination
    const handlePageSelect = selectedPage => {
        setPages(selectedPage);
    }

    const totalPages = Math.ceil(projects.length / 4);

    return (
        <section
            id='Portfolio'
            className='portfolio '
            data-scroll-section >
            <div className="portfolio-container" >
                <div className='content-width'>

                    {/* <!-- Portfolio Title and Subtitle --> */}
                    <div className='portfolio-me' data-scroll data-scroll-speed="0.5" data-scroll-direction='vertical'>
                        <span className="portfolio-icon ri-file-ppt-line" ></span>
                        <p className='portfolio-text'>Portfolio</p>
                    </div>
                    <h2 className='portfolio-title' data-scroll data-scroll-direction='vertical'>My Portfolio</h2>

                    {/* <!-- Categories --> */}
                    <div className="portfolio-category">
                        <ul>
                            {filteredCat.map((category, index) => (
                                <li key={index}>
                                    <button
                                        className={activeCategory === category ? 'active' : ''}
                                        onClick={() => handleCategoryClick(category)}>
                                        {category.toUpperCase()}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* <!-- Categories End --> */}


                    {/* <!-- Portfolio list --> */}
                    <div className='portfolio-list'>
                        {projects.slice(pages * 4 - 4, pages * 4).map(project => (
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
                    {/* <!-- Portfolio list end --> */}


                    {/* <!-- Pagination --> */}
                    <div className='pagination-area'>
                        <ul className="pagination">

                            {[...Array(totalPages).keys()].map((page) => (
                                <li key={page} className="page-item">
                                    <button className={`page-link ${pages === page + 1 ? 'active' : ''}`} onClick={() => handlePageSelect(page + 1)}>
                                        {`0${page + 1}`}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* <!-- Pagination end --> */}


                </div>
            </div>
        </section >
    );
}

export default Portfolio