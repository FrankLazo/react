import { useState, useEffect, useCallback } from 'react';
import getUser from '../helpers/getUser';
import getPosts from '../helpers/getPosts';

const FetchCard = () => {
    const [user, setUser] = useState({});
    const [posts, setsPosts] = useState([]);

    const updateUser = () => {
        getUser()
            .then((newUser) => {
                setUser(newUser);
            });
    }

    const updatePosts = useCallback(() => {
        getPosts(user.id)
            .then((newPosts) => {
                setsPosts(newPosts);
            });
    }, [user.id]);

    useEffect(() => {
        updateUser();
    }, []);

    useEffect(() => {
        if (user?.id)
		{
            updatePosts();
        }
    }, [user, updatePosts]);

    return (
        <div className="block is-flex is-flex-direction-column is-align-items-center">
			<h2>FetchCard</h2>

            <button
				className="button is-primary is-light"
				onClick={updateUser}
				>
                Another User
            </button>

            <p className="is-size-4 mt-4 mb-1">{user.name}</p>
            <p className="is-size-5">{user.email}</p>

            <h3 className="mt-4">Posts - User: {user.id}</h3>

            <ul>
                {
					posts.map(post => (
                    	<li key={post.id}>
							{post.title}
						</li>
                	))
				}
            </ul>
        </div>
    );
}

export default FetchCard;
