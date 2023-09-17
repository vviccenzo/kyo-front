import React, { useState } from 'react';
import { Card, Button, Space, Tooltip } from 'antd';
import { LikeOutlined, CommentOutlined, ShareAltOutlined } from '@ant-design/icons';

function PostCard({ user, content, post }: any) {

    const [likes, setLikes] = useState<number>(post.countLikes);

    const likePost = async () => {
        try {
            const formData = new FormData();

            formData.append('postId', post.id);
            formData.append('userId', user.id);

            const response = await fetch(
                "http://localhost:8080/kyo/post/like",
                {
                    method: "POST",
                    body: formData
                }
            );

            if (response.ok) {
                const responseData = await response.json();
                setLikes(responseData);
            } else {
                console.error("Erro ao enviar os dados.");
            }
        } catch (e: any) {
            console.log(e);
        }
    }

    return (
        <Card
            title={`Por ${user.name}`}
            style={{
                margin: '16px'
            }}
        >
            <p>{content}</p>
            <Space>
                <Tooltip title={`${likes} curtidas`}>
                    <Button
                        icon={<LikeOutlined />}
                        size="small"
                        onClick={likePost}
                    >
                        Curtir
                    </Button>
                </Tooltip>
                <Button icon={<CommentOutlined />} size="small">
                    Comentar
                </Button>
                <Button icon={<ShareAltOutlined />} size="small">
                    Compartilhar
                </Button>
            </Space>
        </Card>
    );
}

export default PostCard;
