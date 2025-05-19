import { useContext } from 'react'
import PostsContext from '../../context/PostsContext';

import PostCard from './PostCard';

const PostsList = () => {

    // get context data
    const posts = useContext(PostsContext);

    // console.log(posts);

    return (
        <>
            {posts.map((post) => (
                <>
                    <PostCard key={post.id} post={post} />
                    <hr />
                </>
            ))}
        </>
    )
}

export default PostsList