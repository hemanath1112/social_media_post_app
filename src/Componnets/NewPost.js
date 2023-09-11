import React from "react";



const NewPost = ({
  postTitle,
  setPostTitle,
  postBody,
  setPostBody,
  postSubmit,
}) => {
 
  return (
    <div className="NewPost">
      <h2>New Post</h2>
      <form action="" className="newPostForm" onSubmit={postSubmit}>
        <label htmlFor="postTitle">Title</label>
        <input
          type="text"
          id="postTitle"
          required
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <label htmlFor="postBody">Post:</label>
        <textarea
          type="text"
          id="postBody"
          required
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)} 
        />
        <button type="submit" >Submit</button>
        
      </form>
    </div>
  );
};

export default NewPost;
