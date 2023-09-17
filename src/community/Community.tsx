import React, { useEffect, useState } from 'react';

import { Button, Divider } from 'antd';
import { Link } from "react-router-dom";

import "./community.css";
import Posts from "./posts/Posts";
import Post from './posts/Post';
import { useMeuContext } from '../context/Context';

export default function Community() {
    const [posts, setPosts] = useState([]);
    const { user } = useMeuContext();

    const loadPosts = async () => {
        if (user && user.id) {
            try {
                const userId = user.id;
                const response = await fetch('http://localhost:8080/kyo/post/get-by-user?userId=' + userId, {
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
        }
    };

    useEffect(() => {
        loadPosts();
    }, [user]);

    return (
        <div>
            <Link to={"/community/newCommunity"}>
                <Button type="dashed" style={{ marginLeft: 15 }}>
                    Nova Comunidade
                </Button>
            </Link>
            <Divider />
            <div>
                <div style={{ paddingLeft: 15 }}>
                    <Post />
                </div>
            </div>
            <Divider />
            <div>
                <Posts posts={posts} />
            </div>
        </div>
    );
}