import React, { useEffect, useRef } from "react";
import "./about.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const aboutTextRef = useRef(null);
    const skillsContainerRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            aboutTextRef.current,
            { opacity: 0, y: 80 },
            {
                opacity: 1,
                y: 0,
                duration: 0.5,
                scrollTrigger: {
                    trigger: aboutTextRef.current,
                    start: "top 80%",
                    end: "bottom 80%",
                    scrub: true,
                },
            }
        );

        const skillItems = gsap.utils.toArray(
            skillsContainerRef.current.querySelectorAll(".items")
        );
        gsap.fromTo(
            skillItems,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.5,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: skillsContainerRef.current,
                    start: "top 80%",
                    end: "bottom 80%",
                    scrub: true,
                },
            }
        );


    }, []);

    return (
        <section id="About" className="about">
            <div className="about-container">
                <div className="content-width">
                    <div className="about-wrapper">
                        <div className="about-text-container" ref={aboutTextRef}>
                            <div className="about-me">
                                <span className="about-icon ri-user-settings-line"></span>
                                <h3 className="about-me-title">About Me</h3>
                            </div>
                            <div className="about-text-wrapper">
                                <p className="about-text">
                                    I’m a MERN stack developer who loves working with React.js, Next.js, React Native, and WordPress. I’ve spent the last few years diving deep into front-end development, building clean, fast, and user-friendly websites and apps.
                                </p>
                                <p className="about-text">
                                    Living with Muscular Dystrophy and being a wheelchair user for
                                    the past 10 years has not only shaped my abilities but also
                                    fueled my drive to create and break new ground. I believe
                                    that every challenge is an opportunity.
                                </p>
                            </div>
                        </div>

                        {/* Skills Section */}
                        <div className="skills-wrapper" ref={skillsContainerRef}>
                            <div className="skills-text-container">
                                <div className="skills-me">
                                    <span className="skills-icon ri-lightbulb-line"></span>
                                    <h3 className="skill-title">My Skills</h3>
                                </div>
                            </div>
                            <div className="skills">
                                <div className="items">
                                    <div className="item-data">
                                        <div className="mr-30">
                                            <div className="img icon-img-40">
                                                <img src="/react.svg" alt="React" />
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="fz-18">React JS</h4>
                                        </div>
                                    </div>
                                    <div className="skill-progress">
                                        <span className="progress" style={{ width: "270px" }} />
                                    </div>
                                </div>

                                <div className="items">
                                    <div className="item-data">
                                        <div className="mr-30">
                                            <div className="img icon-img-40">
                                                <img src="/js.svg" alt="JavaScript" />
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="fz-18">JavaScript</h4>
                                        </div>
                                    </div>
                                    <div className="skill-progress">
                                        <span className="progress" />
                                    </div>
                                </div>

                                <div className="items">
                                    <div className="item-data">
                                        <div className="mr-30">
                                            <div className="img icon-img-40">
                                                <img src="/node-js.svg" alt="Node JS" />
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="fz-18">Node JS</h4>
                                        </div>
                                    </div>
                                    <div className="skill-progress">
                                        <span className="progress" style={{ width: "230px" }} />
                                    </div>
                                </div>

                                <div className="items">
                                    <div className="item-data">
                                        <div className="mr-30">
                                            <div className="img icon-img-40">
                                                <img src="/wp.svg" alt="WordPress" />
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="fz-18">WordPress</h4>
                                        </div>
                                    </div>
                                    <div className="skill-progress">
                                        <span className="progress" style={{ width: "200px" }} />
                                    </div>
                                </div>

                                <div className="items">
                                    <div className="item-data">
                                        <div className="mr-30">
                                            <div className="img icon-img-40">
                                                <img src="/tail-1.png" alt="Tailwind CSS" />
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="fz-18">Tailwind CSS</h4>
                                        </div>
                                    </div>
                                    <div className="skill-progress">
                                        <span className="progress" style={{ width: "200px" }} />
                                    </div>
                                </div>

                                <div className="items">
                                    <div className="item-data">
                                        <div className="mr-30">
                                            <div className="img icon-img-40">
                                                <img src="/psd.png" alt="Adobe Photoshop" />
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="fz-18">Adobe Photoshop</h4>
                                        </div>
                                    </div>
                                    <div className="skill-progress">
                                        <span className="progress" style={{ width: "200px" }} />
                                    </div>
                                </div>

                                <div className="items">
                                    <div className="item-data">
                                        <div className="mr-30">
                                            <div className="img icon-img-40">
                                                <img src="/xd.png" alt="Adobe XD" />
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="fz-18">Adobe XD</h4>
                                        </div>
                                    </div>
                                    <div className="skill-progress">
                                        <span className="progress" style={{ width: "200px" }} />
                                    </div>
                                </div>

                                <div className="items">
                                    <div className="item-data">
                                        <div className="mr-30">
                                            <div className="img icon-img-40">
                                                <img src="/figma.png" alt="Figma" />
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="fz-18">Figma</h4>
                                        </div>
                                    </div>
                                    <div className="skill-progress">
                                        <span className="progress" style={{ width: "200px" }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
