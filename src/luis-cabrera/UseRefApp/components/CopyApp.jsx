import { useState, useRef } from 'react';

const CopyApp = () => {
    const [text, setText] = useState("Hola!");
    const [isCopied, setIsCopied] = useState(false);
    const inputRef = useRef();

    const handleCopy = () => {
        const input = inputRef.current;
        input.select();
        document.execCommand('copy');

        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    }

    return (
        <div className="block is-flex is-flex-direction-column is-align-items-center">
			<h2>CopyApp</h2>

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

            <div className="field">
				<div className="control">
					<button
						onClick={handleCopy}
						className="button is-primary"
						>
						Copy
					</button>
				</div>
			</div>

            {
				isCopied &&
				(
					<div className="notification is-warning is-light p-4">
						<p>Copied!</p>
					</div>
				)
			}
        </div>
    );
}

export default CopyApp;
