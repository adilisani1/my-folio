import React, { useState, useEffect, useRef } from 'react';
import './cursor.scss';
import { gsap } from 'gsap';

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const cursorRef = useRef(null);

    useEffect(() => {
        const mouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        };
    }, []);

    useEffect(() => {
        gsap.to(cursorRef.current, {
            x: position.x,
            y: position.y,
            duration: 1,
            scrub: true,
            ease: "power2.out",
        });
    }, [position]);

    return (
        <div ref={cursorRef} className='cursor'>
            <div className='cursor-dot'></div>
        </div>
    );
}

export default Cursor;
