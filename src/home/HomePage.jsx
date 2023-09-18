import { Divider } from "antd";
import { useMeuContext } from "../context/Context.tsx";

import React, { useEffect, useState } from "react";
import Posts from "../community/posts/Posts.tsx";
import Post from "../community/posts/Post.tsx";

function HomePage() {

  const [posts, setPosts] = useState([]);
  const { user } = useMeuContext();

  const loadPosts = async () => {
    if (user && user.id) {
      try {
        const userId = user.id;
        const response = await fetch(
          "http://localhost:8080/kyo/post/get-by-user?userId=" + userId,
          {
            method: "GET",
          }
        );

        if (response.ok) {
          const responseData = await response.json();
          setPosts(responseData);
        } else {
          console.error("Erro ao enviar os dados.");
        }
      } catch (error) {
        console.error("Erro ao enviar a requisição:", error);
      }
    }
  };

  useEffect(() => {
    loadPosts();
  }, [user]);

  return (
    <div className="home-page">
      <div className="info-boxes">
        <Post loadPosts={loadPosts} />
        <Divider />
        <Posts posts={posts}/>
      </div>
    </div>
  );
}

export default HomePage;
