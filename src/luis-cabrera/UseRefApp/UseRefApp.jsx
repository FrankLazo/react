import CopyApp from "./components/CopyApp";
import FocusApp from "./components/FocusApp";
import LoadingApp from "./components/LoadingApp";
import MediaPlayer from "./components/MediaPlayer";
import RenderApp from "./components/RenderApp";
import ScrollAnimation from "./components/ScrollAnimation";

const UseRefApp = () => {
	return (
		<div className="container content is-flex is-flex-direction-column is-align-items-center p-4">
			<h1 className="has-text-primary">useRef</h1>
			<FocusApp />
			<CopyApp />
			<MediaPlayer />
			<ScrollAnimation />
			<RenderApp />
			<LoadingApp />
		</div>
	);
}

export default UseRefApp;
