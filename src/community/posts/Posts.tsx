import React from "react";
import PostCard from "./Card/PostCard";

export default function Posts() {

    const posts = [
        { user: 'Usuário 1', content: 'Conteúdo da postagem 1' },
        { user: 'Usuário 2', content: 'Conteúdo da postagem 2' },
    ];

    return (
        <div>
            {posts.map((post, index) => (
                <PostCard
                    key={index}
                    user={post.user}
                    content={post.content}
                />
            ))}
        </div>
    );
}