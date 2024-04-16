// ToggleButton.jsx
import React from 'react';

const ToggleButton = ({ openNav, toggleNav }) => {
    return (
        <div className="button" onClick={toggleNav}>
            <div className={`burger ${openNav ? 'burgerActive' : ''}`}></div>
        </div>
    );
}

export default ToggleButton;
