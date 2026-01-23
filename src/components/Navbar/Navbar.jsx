import React, { useEffect, useRef, useState } from 'react';
import './navbar.scss';
import Sidebar from '../sidebar/Sidebar';

const Navbar = ({ openSide, setOpenSide }) => {
    // const [openSide, setOpenSide] = useState(false);
    const sidebarRef = useRef(null);

    const handleOpen = () => {
        setOpenSide((prev) => !prev)
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            // Don't close if clicking on a link or inside the sidebar
            const isLink = event.target.closest('a[href^="#"]');
            const isInsideSidebar = sidebarRef.current?.contains(event.target);
            
            // Only close if clicking outside and not on a link
            if (openSide && !isInsideSidebar && !isLink) {
                setOpenSide(false);
            }
        }

        // Use capture phase but check properly
        if (openSide) {
            document.body.addEventListener('click', handleClickOutside, true);
        }

        return () => {
            document.body.removeEventListener('click', handleClickOutside, true);
        }

    }, [openSide])

    return (
        <div className={`navbar `} >
            <div className={`nav-container`} >
                <div ref={sidebarRef}>
                    <Sidebar
                        openSide={openSide}
                        setOpenSide={setOpenSide} />
                </div>
                <div
                    className='openButton'
                    onClick={handleOpen}>
                    <div className={`burger`}></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;