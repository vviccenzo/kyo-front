import React, { useEffect, useState } from "react";
import Posts from "../community/posts/Posts.tsx";
import Post from "../community/posts/Post.tsx";
import { Divider } from "antd";
import { useMeuContext } from "../context/Context.tsx";

function MainFlowBox({ items }) {
  return (
    <div className="main-flow-box">
      <h2>Fluxo Principal</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function HomePage() {
  const mainFlowItems = ["Item 1", "Item 2", "Item 3", "Item 4"];

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
        <Post />
        <Divider />
        <Posts posts={posts} />
      </div>
      <MainFlowBox items={mainFlowItems} />
    </div>
  );
}

export default HomePage;
