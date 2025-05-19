import React from 'react'

const PostCard = ({ post }) => {
    return (
        <>
            {/* card structure */}
            <div className='Card'>
                <h3>{post.title}</h3>

                <p>{post.content}</p>

                <p>{post.category}</p>
            </div>
        </>
    )
}

export default PostCard