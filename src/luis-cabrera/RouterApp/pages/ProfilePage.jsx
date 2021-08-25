import { useParams } from 'react-router-dom';

const ProfilePage = () => {
	const { username } = useParams();

	return (
		<div className="container content is-flex is-flex-direction-column is-align-items-center p-4">
			<h1 className="has-text-primary">Profile</h1>
			<p className="is-size-3">
				Hello { username }!
			</p>
		</div>
	);
}

export default ProfilePage;
