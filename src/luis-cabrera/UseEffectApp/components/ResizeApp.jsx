import { useState, useEffect } from 'react';

const ResizeApp = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const isMobile = windowWidth < 768;

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <div className="block is-flex is-flex-direction-column is-align-items-center">
            <h1>ResizeApp</h1>

            <p className="is-size-3 has-text-primary mb-1">
				{ windowWidth }
			</p>

            {
				isMobile && <p className="is-size-5">Showed only on mobile device</p>
            }
        </div>
    )
}

export default ResizeApp;
