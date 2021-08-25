import { useState, useRef } from 'react';

const MediaPlayer = () => {
    const videoRef = useRef();
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        const video = videoRef.current;
        isPlaying ? video.pause() : video.play();
        setIsPlaying(!isPlaying);
    }


    return (
        <div className="block is-flex is-flex-direction-column is-align-items-center">
			<h2>MediaPlayer</h2>

            <video
				width="200"
				ref={videoRef}
				onClick={handlePlay}
				>
                <source src="assets/videos/snow.mp4" type="video/mp4"/>
            </video>

            <button
				onClick={handlePlay}
				className="button is-primary mt-4"
				>
                {
					isPlaying ? 'Pause' : 'Play'
				}
            </button>
        </div>
    );
}

export default MediaPlayer;
