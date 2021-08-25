import GalleryModal from "./components/GalleryModal";
import Modal from "./components/Modal";
import useModal from "./hooks/useModal";

const ModalApp = () => {
	const [ isOpenLoginModal, openLoginModal, closeLoginModal ] = useModal();
	const [ isOpenChatModal, openChatModal, closeChatModal ] = useModal();
	const [ isOpenGalleryModal, openGalleryModal, closeGalleryModal ] = useModal();

	return (
		<div className="container content is-flex is-flex-direction-column is-align-items-center p-4">
			<h1 className="has-text-primary">Modal App</h1>

			<div className="field has-addons">
				<div className="control">
					<button
						className="button is-danger"
						onClick={ openLoginModal }>
						Open Login Modal
					</button>
				</div>

				<div className="control">
					<button
						className="button is-primary is-warning"
						onClick={ openChatModal }>
						Open Chat Modal
					</button>
				</div>

				<div className="control">
					<button
						className="button is-primary"
						onClick={ openGalleryModal }>
						Open Gallery Modal
					</button>
				</div>
			</div>

			<Modal
				isOpenModal={ isOpenLoginModal }
				closeModal={ closeLoginModal }
				title="Login"
				>
				<form className="form">
					<div className="field">
						<div className="control">
							<input
								type="email"
								placeholder="Correo"
								className="input"
								/>
						</div>
					</div>

					<div className="field">
						<div className="control">
							<input
								type="password"
								placeholder="Contraseña"
								className="input"
								/>
						</div>
					</div>
				</form>
			</Modal>

			<Modal
				isOpenModal={ isOpenChatModal }
				closeModal={ closeChatModal }
				title="Chat"
				>
				<article className="media has-background-primary-light p-4">
					<div className="media-content">
						<p>Hola!! <b>- Luis</b></p>
					</div>
				</article>

				<article className="media has-background-danger-light p-4">
					<div className="media-content">
						<p>Qué hace :v <b>- María</b></p>
					</div>
				</article>
			</Modal>

			<GalleryModal
				isOpenModal={ isOpenGalleryModal }
				closeModal={ closeGalleryModal }
				/>
		</div>
	);
}

export default ModalApp;
