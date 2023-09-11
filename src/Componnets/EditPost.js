import React, { useEffect } from 'react'
import { useParams } from 'react-router'

const EditPost = ({posts, editPost, editTitle,setEditTitle, editBody, setEditBody}) => {
    const {id} =useParams();
    const post = posts.find(post=>(post.id).toString()===id);

    useEffect(()=>{
        if(post){
            setEditTitle(post.title);
            setEditBody(post.discription)
        }
    },[post, setEditTitle, setEditBody])
  return (
    <div className='NewPost'>
        {editTitle &&
        <>
        <h2>Edit Post</h2>
        <form action=""  className="newPostForm" onSubmit={(e)=> e.preventDefault()}>
            <label htmlFor="edittitle">Title</label>
            <input type="text" 
            id='edittitle'
            required
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}            
            />
             <label htmlFor="">Post</label>
            <textarea id='postBody'
            value={editBody}
            onChange={(e)=> setEditBody(e.target.value)}
            ></textarea>
            <button type='submit' onClick={()=>editPost(post.id)}>Submit</button>
        </form>
        </>
        }

    </div>
  )
}

export default EditPost