import React, { useEffect, useRef, useCallback } from 'react'
import gsap from 'gsap';
import { useLenis } from 'lenis/react';

const Links = ({ setOpenSide }) => {
    const lenis = useLenis(); 

    const menuRef = useRef(null);
    const menuLinks = ['Home', 'About', 'Services', 'Resume', 'Portfolio', 'Contact'];

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
        tl.from(menuRef.current.children, {
            opacity: 0,
            duration: .6,
            stagger: 0.1,
        });
        tl.to(menuRef.current.children, {
            y: 0,
            opacity: 1,
            duration: .6,
            stagger: 0.1,
        });
    }, []);

    const handleNavigation = useCallback((event, item) => {
        event.preventDefault();
        event.stopPropagation(); // Prevent event bubbling to click outside handler

        // Function to find and scroll to section with retry mechanism
        const scrollToSection = (retries = 15) => {
            const section = document.querySelector(`#${item}`);
            
            if (section) {
                // Check if this is the last section (Contact)
                const isLastSection = item === 'Contact';
                
                // Use lenis if available
                if (lenis) {
                    try {
                        // For last section (Contact), use a more reliable method
                        if (isLastSection) {
                            // Calculate the exact scroll position to the Contact section
                            // Wait a moment for DOM to be ready
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    const rect = section.getBoundingClientRect();
                                    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                                    const sectionTop = rect.top + scrollTop;
                                    
                                    // Scroll to section with small offset
                                    lenis.scrollTo(sectionTop - 20, {
                                        lerp: 0.0001,
                                        duration: 2.5,
                                    });
                                    
                                    // Ensure we can scroll to the very bottom if needed
                                    setTimeout(() => {
                                        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
                                        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
                                        
                                        // If we're not at the bottom and section is near bottom, scroll more
                                        if (currentScroll < maxScroll - 100) {
                                            lenis.scrollTo(maxScroll, {
                                                lerp: 0.0001,
                                                duration: 1,
                                            });
                                        }
                                    }, 500);
                                });
                            });
                        } else {
                            // For other sections, use standard scroll
                            lenis.scrollTo(section, {
                                lerp: 0.0001,
                                duration: 2.5,
                                offset: -40
                            });
                        }
                    } catch (error) {
                        // If lenis fails, use fallback
                        console.warn('Lenis scroll failed, using fallback:', error);
                        if (isLastSection) {
                            section.scrollIntoView({ 
                                behavior: 'smooth', 
                                block: 'end' 
                            });
                        } else {
                            section.scrollIntoView({ 
                                behavior: 'smooth', 
                                block: 'start' 
                            });
                        }
                    }
                } else {
                    // Fallback to native smooth scroll
                    if (isLastSection) {
                        // For last section, use 'end' to ensure it's fully visible
                        section.scrollIntoView({ 
                            behavior: 'smooth', 
                            block: 'end' 
                        });
                    } else {
                        section.scrollIntoView({ 
                            behavior: 'smooth', 
                            block: 'start' 
                        });
                    }
                }
                
                // Close sidebar after scroll has started (not immediately)
                setTimeout(() => {
                    setOpenSide(false);
                }, 100);
                
                return true;
            } else if (retries > 0) {
                // Retry after a short delay if section not found
                setTimeout(() => scrollToSection(retries - 1), 150);
                return false;
            } else {
                // Final fallback: try native scroll with hash
                window.location.hash = item;
                // Force scroll after hash change
                setTimeout(() => {
                    const section = document.querySelector(`#${item}`);
                    if (section) {
                        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }, 200);
                
                // Close sidebar
                setTimeout(() => {
                    setOpenSide(false);
                }, 100);
                
                return false;
            }
        };

        // Start scrolling FIRST, then close sidebar
        scrollToSection();
    }, [lenis, setOpenSide]);
    return (

        <div className='links' ref={menuRef}>
            {menuLinks.map((item) => (
                <a
                    key={item}
                    href={`#${item}`}
                    onClick={(event) => handleNavigation(event, item)}
                    style={{ 
                        cursor: 'pointer', 
                        pointerEvents: 'auto'
                    }}>
                    {item}
                </a>
            ))}
        </div>
    )
}

export default Links;