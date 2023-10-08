import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { BellOutlined } from '@ant-design/icons';
import ReconnectingWebSocket from 'reconnecting-websocket';

const NotificationIcon = () => {
    const [unreadCount, setUnreadCount] = useState(0);

    useEffect(() => {
        const socket = new ReconnectingWebSocket('ws://localhost:8080/ws');

        socket.addEventListener('open', () => {
            console.log('Conexão WebSocket estabelecida.');
        });

        socket.addEventListener('message', (event) => {
            const message = JSON.parse(event.data);
            console.log('Mensagem recebida:', message);

            if (message.topic === '/topic/notification') {
                console.log('Nova notificação:', message.data);

                setUnreadCount((prevCount) => prevCount + 1);
            }
        });

        socket.addEventListener('close', () => {
            console.log('Conexão WebSocket fechada.');
        });

        return () => {
            socket.close();
        };
    }, []);

    const handleNotificationClick = () => {
    };

    return (
        <div style={{ position: 'relative' }}>
            <Button
                type="text"
                icon={<BellOutlined />}
                style={{
                    fontSize: '20px',
                    height: 64,
                    display: 'flex',
                    marginTop: 20,
                    paddingLeft: 10,
                    boxShadow: 'none',
                }}
                onClick={handleNotificationClick}
            >
                {unreadCount > 0 && (
                    <span
                        style={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            backgroundColor: 'red',
                            color: 'white',
                            borderRadius: '50%',
                            padding: '2px 6px',
                            fontSize: '12px',
                        }}
                    >
                        {unreadCount}
                    </span>
                )}
            </Button>
        </div>
    );
};

export default NotificationIcon;
