import React from "react";
import "../index.css";

function PostCard({ post }) {
  return (
    <div className="post-card">
      <img src={post.image} alt={post.title} />
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
}

export default PostCard;
