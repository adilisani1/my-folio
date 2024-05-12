import React, { useState } from 'react';
import './navbar.scss';
import Sidebar from '../sidebar/Sidebar';

const Navbar = () => {
    const [openSide, setOpenSide] = useState(false);
    const handleOpen = () => {
        setOpenSide((prev) => !prev)
    }
    return (
        <div className={`navbar `} >
            <div className={`nav-container`} >
                <Sidebar
                    openSide={openSide}
                    setOpenSide={setOpenSide} />
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