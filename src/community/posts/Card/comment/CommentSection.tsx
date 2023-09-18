// CommentSection.js
import React, { useState } from 'react';
import { Modal, Input, Button, List, Avatar, Form } from 'antd';
import { CommentOutlined } from '@ant-design/icons';

const { TextArea } = Input;

function CommentSection({ comments, onAddComment }: any) {
    const [isCommentModalVisible, setIsCommentModalVisible] = useState(false);

    const handleComment = () => {
        setIsCommentModalVisible(true);
    }

    const handleCommentSubmit = (values: any) => {
        const newComment = values.comment;
        onAddComment(newComment);
        setIsCommentModalVisible(false);
    }

    const handleCommentCancel = () => {
        setIsCommentModalVisible(false);
    }

    return (
        <div>
            <Button icon={<CommentOutlined />} size="small" onClick={handleComment} />
            <Modal
                title="Comentários"
                visible={isCommentModalVisible}
                onCancel={handleCommentCancel}
                footer={null}
            >
                <Form onFinish={handleCommentSubmit}>
                    <Form.Item name="comment">
                        <TextArea
                            style={{
                                resize: 'none'
                            }}
                            rows={4}
                            placeholder="Digite seu comentário"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Comentar
                        </Button>
                    </Form.Item>
                </Form>
                <List
                    itemLayout="horizontal"
                    dataSource={comments}
                    renderItem={(item) => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar src={item.user.avatar} />}
                                title={item.user.name}
                                description={item.text}
                            />
                        </List.Item>
                    )}
                />
            </Modal>
        </div>
    );
}

export default CommentSection;
