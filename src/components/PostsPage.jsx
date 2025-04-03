import React from "react";
import PostsList from "./PostsList";
import "../index.css";

function PostsPage() {
  return (
    <div>
      <h1 className="page-title">Posts</h1>
      <PostsList />
    </div>
  );
}

export default PostsPage;
