import React from 'react'
import './sevices.scss';
import { WebDevelopment, UxUiDesign, CmsDevelopment, LogoDesign } from './../../icons/icons';

const Services = () => {
    return (
        <section id='Services' className='services' data-scroll-section>
            <div className="services-container">
                <div className='content-width'>
                    <div className='services-text-container'>
                        <div className='services-me'>
                            <span className="services-icon ri-service-line"></span>
                            <p className='services-text'>
                                SERVICES
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className='services-title'>My Services</h2>
                    </div>

                    <div className='my-services-container'>
                        <div className="my-services-parent">
                            <div className='my-services-items'>

                                <h3 className='my-services-title'>
                                    UX-UI <span>Design</span>
                                </h3>
                                <UxUiDesign />
                                <div>
                                    <p className='my-services-text'>The UI/UX Design Showcase is where form and imagination come together. Discover a world where the user experience is everything. See how user-centric design improves digital experiences by looking through the portfolio.</p>
                                </div>

                            </div>
                            <div className='my-services-items'>

                                <h3 className='my-services-title'>
                                    Web <span> Development</span>
                                </h3>
                                <WebDevelopment />
                                <div>
                                    <p className='my-services-text'>My experience in React JS, Next JS, Redux, Node JS, Express, and MongoDB allows me to provide complete web development solutions that are customised to meet your requirements.</p>

                                </div>

                            </div>
                        </div>

                        <div className="my-services-parent">
                            <div className='my-services-items'>

                                <h3 className='my-services-title'>
                                    CMS <span>Development</span>
                                </h3>
                                <CmsDevelopment />
                                {/* <img className='my-services-ico' src='/services/cms.svg' alt="" /> */}
                                <p className='my-services-text'>Using my CMS development expertise, I provide secure and customisable content management systems that optimise your online presence.</p>

                            </div>
                            <div className='my-services-items'>
                                <h3 className='my-services-title'>
                                    LOGO <span> DESIGN</span>
                                </h3>
                                <LogoDesign />
                                {/* <img className='my-services-ico' src='/services/logo-icon.svg' alt="" /> */}
                                <div>
                                    <p className='my-services-text'>My passion is creating visually attractive and memorable logos that perfectly capture your brand identity. Together, let's design a visually appealing appearance for your company.</p>

                                </div>

                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section >
    )
}

export default Services