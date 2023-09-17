import React from 'react';
import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

import "./login.css";
import { useMeuContext } from '../context/Context';

export default function Login({ onLogin }) {
    const { setUserInfo } = useMeuContext();
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const onFinish = async (values: any) => {
        setUserInfo({
            isLogged: true
        });
        localStorage.setItem('isLogged', 'true');
        navigate('/home');
        // const response = await fetch('/api/login', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(values),
        // });

        // if (response.ok) {
        //     onLogin();
        // } else {
        //     alert('Login falhou. Verifique suas credenciais.');
        // }
    };

    return (
        <div className="login-box">
            <div className="login-input">
                <h2>Login</h2>
                <Form form={form} name="login" onFinish={onFinish}>
                    <Form.Item
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Por favor, insira seu email!',
                            },
                        ]}
                    >
                        <Input placeholder="Email" style={{ width: '250px' }} />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Por favor, insira sua senha!',
                            },
                        ]}
                    >
                        <Input.Password placeholder="Senha" style={{ width: '250px' }} />
                    </Form.Item>
                    <Form.Item>
                        <div className='buttons-input'>
                            <Button type="default">
                                Cancelar
                            </Button>
                            <Button type="primary" htmlType="submit">
                                Entrar
                            </Button>
                        </div>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};