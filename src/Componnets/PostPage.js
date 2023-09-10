import React from 'react'
import { useParams } from 'react-router'

const PostPage = ({posts, deletedPost}) => {

  const {id} = useParams();
  const post = posts.find(post=>(post.id).toString() ===id);
  return (
    <div className='PostPage'>
      <div className="post">
        {post && 
        <>
          <h2>{post.title}</h2>
          <p className='postDate'>{post.datetime}</p>
          <p className='postBody'>{post.discription}</p>
          <button type='submit' onClick={()=>deletedPost(post.id)}>
            Deleted Post
          </button>
        </>
        }
        {!post &&
          <>
          <h2>Post Not Found</h2>
          <p>Well, that's Disappointing.</p>
          <p>Back to Home page</p>
          </>
        }
      </div>
    </div>
  )
}

export default PostPage