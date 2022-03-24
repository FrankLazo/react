import NotesAppBar from './NotesAppBar';

const NoteScreen = () =>
{
	return (
		<div className="notes__main-content">
			<NotesAppBar />

			<div className="notes__content">
				<input
					type="text"
					placeholder="Some awesome title"
					className="notes__title-input"
					autoComplete="off" />

				<textarea
					placeholder="What happened today"
					className="notes__textarea"></textarea>

				<div className="notes__image">
					<img
						src="https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg"
						alt="Landscape" />
				</div>
			</div>
		</div>
	);
};

export default NoteScreen;
