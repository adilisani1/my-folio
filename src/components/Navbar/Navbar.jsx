import React from 'react';
import './navbar.scss';
import Sidebar from '../sidebar/Sidebar';

const Navbar = () => {

    return (
        <div className={`navbar `} >
            <div className={`nav-container`} >
                <div className='wrapper' >
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