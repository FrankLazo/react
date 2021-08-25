import { useState, useRef, useEffect } from 'react';

const ScrollAnimation = () => {
    const [background, setBackground] = useState("pink");
    const divRef = useRef();

    useEffect(() => {
        const handleScroll = () => {
            const div = divRef.current;
            const { y } = div.getBoundingClientRect();

            const backgroundColor = y <= 0 ? 'orange' : 'pink';
            setBackground(backgroundColor);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }

    }, []);

    return (
        <div className="block is-flex is-flex-direction-column is-align-items-center">
			<h2>ScrollAnimation</h2>

            <div
				ref={divRef}
				style={{ height: "75vh", background }}>
                <p className="is-size-5 px-3 py-2">Scroll to change background-color</p>
            </div>
        </div>
    );
}

export default ScrollAnimation;
