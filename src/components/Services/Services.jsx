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
                                {/* <img className='my-services-ico' src='/services/ui-ux-icon.svg' alt="" /> */}
                                <div>
                                    <p className='my-services-text'>Welcome to our UI/UX Design Showcase, where
                                        creativity meets functionality. Dive world where
                                        user experience is paramount, and portfolio and
                                        witness the art of user-centric design that elevates
                                        digital experiences to new heights.</p>
                                </div>

                            </div>
                            <div className='my-services-items'>

                                <h3 className='my-services-title'>
                                    Web <span> Development</span>
                                </h3>
                                <WebDevelopment />
                                {/* <img className='my-services-ico' src='/services/web-dev-icon.svg' alt="" /> */}
                                <div>
                                    <p className='my-services-text'>Welcome to our UI/UX Design Showcase, where
                                        creativity meets functionality. Dive world where
                                        user experience is paramount, and portfolio and
                                        witness the art of user-centric design that elevates
                                        digital experiences to new heights.</p>
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
                                <div>
                                    <p className='my-services-text'>Welcome to our UI/UX Design Showcase, where
                                        creativity meets functionality. Dive world where
                                        user experience is paramount, and portfolio and
                                        witness the art of user-centric design that elevates
                                        digital experiences to new heights.</p>
                                </div>
                            </div>
                            <div className='my-services-items'>
                                <h3 className='my-services-title'>
                                    LOGO <span> DESIGN</span>
                                </h3>
                                <LogoDesign />
                                {/* <img className='my-services-ico' src='/services/logo-icon.svg' alt="" /> */}
                                <div>
                                    <p className='my-services-text'>Welcome to our UI/UX Design Showcase, where
                                        creativity meets functionality. Dive world where
                                        user experience is paramount, and portfolio and
                                        witness the art of user-centric design that elevates
                                        digital experiences to new heights.</p>
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