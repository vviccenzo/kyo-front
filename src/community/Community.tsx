import React, { useState } from 'react';

import { Input, Button, Row, Col, Space, Avatar, List, Dropdown, Menu, Divider } from 'antd';
import { Link } from "react-router-dom";
import {
    UserOutlined,
    LikeOutlined,
    CommentOutlined,
    PaperClipOutlined
} from '@ant-design/icons';

import "./community.css";
import Posts from "./posts/Posts";

const data = [
    {
        id: 1,
        user: 'Alice',
        community: 'Tech Enthusiasts',
        taggedUsers: ['Bob', 'Charlie'],
    },
    {
        id: 2,
        user: 'Bob',
        community: 'Developers',
        taggedUsers: ['Alice', 'Eve'],
    }
];

const users = ['Bob', 'Charlie', 'Dave', 'Eve'];

export default function Community() {

    const [taggedUsersDropdownVisible, setTaggedUsersDropdownVisible] = useState(false);
    const [taggedUsers, setTaggedUsers] = useState([]);
    const [text, setText] = useState('');
    const [posts, setPosts] = useState(data);

    const handlePost = () => {
        const newPost = {
            id: posts.length + 1,
            user: 'Alice',
            community: 'Tech Enthusiasts',
            text,
            taggedUsers,
        };

        setPosts([newPost, ...posts]);
        setText('');
        setTaggedUsers([]);
        setTaggedUsersDropdownVisible(false);
    };

    const handleTagUser = (user: any) => {
        setTaggedUsers((prevUsers) => [...prevUsers, user]);
        setTaggedUsersDropdownVisible(false);
    };

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const handleFileUpload = (e: any) => {
    };

    const userMenu = (
        <Menu>
            {users.map((user) => (
                <Menu.Item key={user} onClick={() => handleTagUser(user)}>
                    {user}
                </Menu.Item>
            ))}
        </Menu>
    );

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
                    <Input.TextArea
                        value={text}
                        onChange={handleTextChange}
                        placeholder="Digite um comentário"
                        autoSize={{ minRows: 4 }}
                        style={{
                            marginBottom: 15
                        }}
                    />
                    <Row gutter={16}>
                        <Col span={12}>
                            <Space size={16}>
                                <Dropdown
                                    overlay={userMenu}
                                    visible={taggedUsersDropdownVisible}
                                    onVisibleChange={(visible) => setTaggedUsersDropdownVisible(visible)}
                                >
                                    <Button icon={<UserOutlined />}>Marcar Pessoa</Button>
                                </Dropdown>
                                <Button
                                    icon={<PaperClipOutlined />}
                                    onClick={handleFileUpload}
                                >
                                    Anexar Arquivo
                                </Button>
                            </Space>
                        </Col>
                        <Col span={12}>
                            <div style={{ textAlign: 'right', paddingRight: 15 }}>
                                <Button type="primary" onClick={handlePost}>
                                    Postar
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            <Divider />
            <div>
                <Posts />
            </div>
        </div>
    );
}