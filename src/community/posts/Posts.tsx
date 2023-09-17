import React from "react";
import PostCard from "./Card/PostCard";

export default function Posts({ posts }) {
    return (
        <div>
            {posts.map((post, index) => (
                <PostCard
                    key={index}
                    user={post.author}
                    content={post.content}
                    post={post}
                />
            ))}
        </div>
    );
}