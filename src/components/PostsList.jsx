import React, { useContext } from "react";
import { PostsContext } from "../context/PostsContext";
import PostCard from "./PostCard";
import "../index.css";

function PostsList() {
  const posts = useContext(PostsContext);

  return (
    <div className="posts-grid">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostsList;
