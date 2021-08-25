import { useState, useRef, useEffect } from 'react';
import getPost from '../helpers/getPost';

const Card = () => {
    const [post, setPost] = useState({ title: "post1" });
    const [loading, setLoading] = useState(true);
    const isMountedRef = useRef(true);

    const updatePost = () => {
        getPost()
            .then((newPost) => {
                setTimeout(() => {
                    if (isMountedRef.current)
					{
                        setPost(newPost);
                        setLoading(false);
                    }
                }, 2000);
            });
    }

    useEffect(() => {
        updatePost();

        return () => {
            isMountedRef.current = false;
        }
    }, []);

    if (loading) return <p className="is-size-5 mt-2">Loading...</p>

    return (
        <div>
          <p className="is-size-5 mt-2">{post.title}</p>
        </div>
    );
}

export default Card;
