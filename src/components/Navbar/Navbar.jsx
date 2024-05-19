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
            if (openSide && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setOpenSide(false)
            }
        }

        document.body.addEventListener('click', handleClickOutside, true)

        return () => {
            document.body.removeEventListener('click', handleClickOutside, false)
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