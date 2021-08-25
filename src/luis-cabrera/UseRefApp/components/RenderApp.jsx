import { useState, useRef, useEffect } from 'react';

const RenderApp = () => {
    const [text, setText] = useState("");
    const rendersRef = useRef(1);

    useEffect(() => {
        rendersRef.current++;
    });

    return (
        <div className="block is-flex is-flex-direction-column is-align-items-center">
			<h2>RenderApp</h2>

            <div className="field">
				<div className="control">
					<input
						type="text"
						value={text}
						className="input is-primary"
						onChange={(e) => setText(e.target.value)}
					/>
				</div>
			</div>

            <p className="is-size-5">Renders: {rendersRef.current}</p>
        </div>
    );
}

export default RenderApp;
