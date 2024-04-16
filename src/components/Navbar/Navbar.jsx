import React, { useEffect, useState } from 'react';
import './navbar.scss';
import Sidebar from '../sidebar/Sidebar';

const Navbar = () => {

    // const [headerActive, setHeaderActive] = useState(false);
    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (window.scrollY > 30) {
    //             setHeaderActive(true);
    //         } else {
    //             setHeaderActive(false);
    //         }
    //     };
    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // },)

    return (
        <div className={`navbar `}>
            <div className={`nav-container`}>
                <div className='wrapper'>
                    <div className='fl-1'>
                        <a className='logo '>
                        </a>
                    </div>
                    <div className='fl-2'>
                        <Sidebar />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar