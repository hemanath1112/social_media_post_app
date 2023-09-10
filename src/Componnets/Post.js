import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <div className="post">
      <Link to={`post/${post.id}`}>
        <h2>{post.title}</h2>
        <p className="postDate">{post.datetime}</p>
      </Link>
        <p className="postBody">
      
        {post.discription.length <= 25
          ? post.discription
          : `${post.discription.slice(0, 25)}.....`}
      </p>
    </div>
  );
};

export default Post;
