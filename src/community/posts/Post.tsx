import { Button, Col, Dropdown, Input, Menu, Row, Space } from "antd";
import { useMeuContext } from "../../context/Context";
import React, { useState } from "react";
import {
    UserOutlined,
    PaperClipOutlined
} from '@ant-design/icons';

import "./Post.css";

export default function Post({ loadPosts }: any) {
    const { user } = useMeuContext();
    const [taggedUsersDropdownVisible, setTaggedUsersDropdownVisible] = useState(false);
    const [taggedUsers, setTaggedUsers] = useState([]);
    const [text, setText] = useState('');
    const users = ['Bob', 'Charlie', 'Dave', 'Eve'];

    const handlePost = async () => {

        const formData = new FormData();
        formData.append('authorId', user.id);
        formData.append('content', text);

        try {
            const response = await fetch('http://localhost:8080/kyo/post', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                console.log('Dados enviados com sucesso!');
            } else {
                console.error('Erro ao enviar os dados.');
            }
        } catch (error) {
            console.error('Erro ao enviar a requisição:', error);
        }

        setText('');
        setTaggedUsers([]);
        setTaggedUsersDropdownVisible(false);
    };

    const handleTagUser = (user: any) => {
        setTaggedUsersDropdownVisible(false);
    };

    const handleTextChange = (e: any) => {
        setText(e.target.value);
    };

    const handleFileUpload = (e: any) => {
        console.log(e);
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
        <div className="input-area">
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
    );
}