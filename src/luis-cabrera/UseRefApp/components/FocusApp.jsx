import { useState, useRef } from 'react';

const FocusApp = () => {
    const [text, setText] = useState("");
    const inputRef = useRef();

    const handleFocus = () => {
        const input = inputRef.current;
        input.focus();
    }

    return (
        <div className="block is-flex is-flex-direction-column is-align-items-center">
			<h2>FocusApp</h2>

            <div className="field">
				<div className="control">
					<input
						ref={inputRef}
						type="text"
						value={text}
						className="input is-primary"
						onChange={(e) => setText(e.target.value)}
						/>
				</div>
			</div>

            <button
				onClick={handleFocus}
				className="button is-primary"
				>
                Focus
            </button>
        </div>
    );
}

export default FocusApp;
