import { ReactLenis } from 'lenis/react';

function SmoothScroll({children}) {
    return (
        <ReactLenis root options={{
            lerp: 0.001,
            duration: 1.5,
            smoothTouch: true
        }}>
            {children}
        </ReactLenis>
    )
}

export default SmoothScroll;