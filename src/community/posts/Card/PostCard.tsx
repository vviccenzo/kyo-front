import React, { useState } from 'react';
import { Card, Button, Space, Tooltip, Avatar } from 'antd';
import { LikeOutlined, ShareAltOutlined, ClockCircleOutlined } from '@ant-design/icons';

import moment from 'moment';
import CommentSection from './comment/CommentSection';

function PostCard({ user, content, post }: any) {

    const [likes, setLikes] = useState<number>(post.countLikes);
    const [comments, setComments] = useState<string[]>([]);

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

    function parseDate(date: string) {
        const now = moment();
        const dateMoment = moment(date);

        if (now.isSame(date, 'day')) {
            return dateMoment.format('HH:mm');
        } else if (now.isSame(dateMoment.clone().subtract(1, 'day'), 'day')) {
            return 'Ontem';
        } else {
            return dateMoment.format('YYYY-MM-DD HH:mm');
        }
    }

    const addComment = (newComment: any) => {
        console.log(newComment);
    }

    return (
        <Card
            style={{
                maxWidth: '800px',
                margin: '0 auto',
                marginBottom: '16px',
            }}
        >
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                <Avatar src={user.avatar} />
                <div style={{ marginLeft: '8px' }}>
                    <span style={{ fontWeight: 'bold' }}>{user.name}</span>
                    <br />
                    <span style={{ fontSize: '12px', color: '#777' }}>
                        <ClockCircleOutlined style={{ marginRight: '4px' }} />
                        {parseDate(post.createdAt)}
                    </span>
                </div>
            </div>
            <p
                style={{
                    fontSize: '16px',
                    lineHeight: '1.5',
                    marginBottom: '16px',
                }}
            >
                {content}
            </p>
            <Space>
                <Tooltip title={`${likes} curtidas`}>
                    <Button
                        icon={<LikeOutlined />}
                        size="small"
                        onClick={likePost}
                        style={{
                            color: '#1890ff',
                            fontWeight: 'bold',
                        }}
                    >
                        Curtir
                    </Button>
                </Tooltip>
                <Tooltip title="Comentar">
                    <CommentSection
                        comments={comments}
                        onAddComment={addComment}
                    />
                </Tooltip>
                <Tooltip title="Compartilhar">
                    <Button icon={<ShareAltOutlined />} size="small" />
                </Tooltip>
            </Space>
            {likes > 0 && (
                <div style={{ marginTop: '16px' }}>
                    <span
                        style={{
                            fontSize: '14px',
                            color: '#777'
                        }}
                    >
                        {likes} curtidas
                    </span>
                </div>
            )}
        </Card>
    );
}

export default PostCard;
