import React, { useEffect, useState } from "react";
import PostCard from "./Card/PostCard";

export default function Posts() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        loadPosts();
    }, []);

    const loadPosts = async () => {
        try {
            const response = await fetch('http://localhost:8080/kyo/post/get-by-user?userId=1', {
                method: 'GET'
            });

            if (response.ok) {
                const responseData = await response.json();
                setPosts(responseData);
            } else {
                console.error('Erro ao enviar os dados.');
            }
        } catch (error) {
            console.error('Erro ao enviar a requisição:', error);
        }

    };

    return (
        <div>
            {posts.map((post, index) => (
                <PostCard
                    key={index}
                    user={post.author}
                    content={post.content}
                />
            ))}
        </div>
    );
}