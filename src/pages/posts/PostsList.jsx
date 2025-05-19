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
                    <div>
                        <PostCard key={post.id} post={post} />
                    </div>
                    <hr />
                </>
            ))}
        </>
    )
}

export default PostsList