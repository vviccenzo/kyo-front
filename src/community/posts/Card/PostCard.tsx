import React from 'react';
import { Card, Button, Space, Avatar } from 'antd';
import { LikeOutlined, CommentOutlined, ShareAltOutlined } from '@ant-design/icons';

function PostCard({ user, content }) {
    return (
        <Card title={`Por ${user}`} extra={<Avatar src={user.avatar} />} style={{ margin: '16px' }}>
            <p>{content}</p>
            <Space>
                <Button icon={<LikeOutlined />} size="small">
                    Curtir
                </Button>
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
