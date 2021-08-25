// import './Modal.css';

const Modal = ({ isOpenModal, closeModal, title, children }) => {
	const handleModalDialogClick = (e) => {
		e.stopPropagation();
	}

	return (
		<div
			className={`modal ${ isOpenModal && 'is-active' }`}
			onClick={ closeModal }
			>
			<div className="modal-background"></div>
			<div
				className="modal-content has-background-light p-4 pb-5"
				onClick={ handleModalDialogClick }
				>
				<h2>{ title }</h2>

				<button
					className="modal-close is-large"
					onClick={ closeModal }>
					Close modal
				</button>

				{ children }
			</div>
		</div>
	);
}

export default Modal;
