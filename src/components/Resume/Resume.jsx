import React, { useEffect, useRef } from 'react'
import './resume.scss'
import { Coursera } from '../../icons/icons';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CSSRulePlugin from 'gsap/CSSRulePlugin';

gsap.registerPlugin(useGSAP, ScrollTrigger, CSSRulePlugin);


const Resume = () => {
    const container = useRef();
    useGSAP(() => {
        let timeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".timeline",
                start: "top, 85%",
                end: "bottom, 85%",
                scrub: 1,
            }

        });
        timeline.fromTo(".line", { scaleY: 0 }, { scaleY: 1, backgroundColor: "white", duration: 2, transformOrigin: "top", delay: 2 }, 0);
        timeline.fromTo(".dot", { backgroundColor: "none", opacity: 0 }, { backgroundColor: "white", opacity: 1, duration: 2, delay: 2 }, 0)

        let timeline2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".coursera",
                start: "top, 85%",
                end: "bottom, 85%",
                scrub: 1,
            }

        });
        timeline2.fromTo(".dot", { backgroundColor: "none", opacity: 0 }, { backgroundColor: "white", opacity: 1, duration: 2, delay: 2 }, 0)
    }, { scope: container })


    return (
        <section id='Resume' ref={container} className='resume'>
            <div className='resume-container' >
                <div className='content-width'>
                    {/* Exp / Specialization */}
                    <div className='speacial'>
                        <div className='speacial-text-container'>
                            <div className='speacial-wrap'>
                                <span className="speacial-icon ri-briefcase-line"></span>
                                <h3 className='speacial-short-title'>
                                    Expertise & Focus
                                </h3>
                            </div>
                        </div>

                        <div style={{ marginTop: "40px" }}>
                            <h2 className='speacial-title'>Experience</h2>
                        </div>

                        {/* TimeLine */}
                        <div className='timeline'>
                            {/* {P1} */}
                            <div className='timeline-wrap'>
                                <div className='dot' />
                                <div className='line' />

                                <div className='timeline-title'>
                                    <h3>MAY 2022</h3>
                                </div>
                                <div className='timeline-item'>
                                    <span> UPWORK · FREELANCE - REMOTE</span>
                                    <ul className='' id='work_experience'>
                                        <div className='item-data'>
                                            <span className="ri-circle-fill dot-icon"></span>
                                            <li>Developing applications using ReactJS, NextJS, and React Native.</li>
                                        </div>
                                        <div className='item-data'>
                                            <span className="ri-circle-fill dot-icon"></span>
                                            <li>Converting Figma into React
                                                Application.</li>
                                        </div>
                                        <div className='item-data'>
                                            <span className="ri-circle-fill dot-icon"></span>
                                            <li>Developed dashboards for Crypto
                                                applications.</li>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                            {/* {P1-End} */}
                            {/* {P2} */}
                            <div className='timeline-wrap'>
                                <div className='dot' />
                                <div className='line' />
                                <div className='timeline-title'>
                                    <h3>MAR 2020</h3>
                                </div>
                                <div className='timeline-item'>
                                    <span> CO-FOUNDER - PARHOAURPARHAO</span>
                                    <ul className='' id='work_experience'>
                                        <div className='item-data'>
                                            <span className="ri-circle-fill dot-icon"></span>
                                            <li>Platform to connect people seeking
                                                tuition and Tutors</li>
                                        </div>
                                        <div className='item-data'>
                                            <span className="ri-circle-fill dot-icon"></span>
                                            <li>Developing frontend and assisting
                                                team in Marketing</li>
                                        </div>

                                    </ul>
                                </div>
                            </div>
                            {/* {P2-End} */}

                        </div>
                        {/* SPEACILIZATION */}
                        <div className='coursera-container'>
                            <div className='coursera-title'>
                                <h3>Specialization</h3>
                            </div>
                            <div className='coursera-wrap'>
                                <div className='coursera'>
                                    <div className='dot' />
                                    <div className='coursera-content'>
                                        <div className='coursera-year'>
                                            <h3>DEC 2022</h3>
                                        </div>
                                        <span><Coursera /></span>

                                        <div className='full-stack'>
                                            <h4 className='full-stack-text'>Full-Stack Web Development with React Specialization.</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>

                </div>
            </div>
        </section>
    )
}

export default Resume