import React, { useEffect, useState } from "react";
import { PostsContext } from "./context/PostsContext";
import PostsPage from "./components/PostsPage";

function App() {
  const [posts, setPosts] = useState([]);

useEffect(() => {
  fetch("https://picsum.photos/v2/list?page=1&limit=3")
    .then((res) => res.json())
    .then((picsumImages) => {
      const postsWithImages = picsumImages.map((image, index) => ({
        id: index + 1,
        title: `Post ${index + 1}`,
        content: `Content of Post ${index + 1}`,
        image: image.download_url,
      }));
      setPosts(postsWithImages);
    })
    .catch(() => {
      setPosts([]);
    });
}, []);

  return (
    <PostsContext.Provider value={posts}>
      <PostsPage />
    </PostsContext.Provider>
  );
}

export default App;
