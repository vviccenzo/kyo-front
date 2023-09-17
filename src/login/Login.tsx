import React, { useState } from 'react';
import { Form, Input, Button, notification } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

import "./login.css";
import { useMeuContext } from '../context/Context';
import saveUser from './functions/saveUser';

interface LoginProps {
    onLogin: any
}

export default function Login({ onLogin }: LoginProps) {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const { setIsLogged, setUser } = useMeuContext();

    const [login, setLogin] = useState({
        email: '',
        password: ''
    });

    const onFinish = async (values: any) => {

        const formData = new FormData();

        formData.append('email', values.email);
        formData.append('password', values.password);

        try {
            const response = await fetch('http://localhost:8080/kyo/login', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                console.log('Dados enviados com sucesso!');

                const responseReturn = await response.json();
                const jsonString = JSON.stringify(responseReturn);

                setUser(responseReturn);
                saveUser(jsonString);
                setIsLogged('true');
                navigate('/home');
            } else {
                console.error('Erro ao enviar os dados.');

                notification.open({
                    message: 'Erro ao efetuar login',
                    description: 'Usuário inválido.',
                    duration: 5,
                    type: 'error'
                });
            }
        } catch (error) {
            console.error('Erro ao enviar a requisição:', error);
        }
    };

    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        setLogin({
            ...login,
            [name]: value,
        });
    };

    return (
        <div className="login-box">
            <div className="login-input">
                <h2>
                    Login
                </h2>
                <Form
                    form={form}
                    name="login"
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Por favor, insira seu email!',
                            },
                        ]}
                    >
                        <Input
                            placeholder="Email"
                            onChange={handleInputChange}
                            style={{
                                width: '250px'
                            }}
                        />
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
                        <Input.Password
                            placeholder="Senha"
                            style={{
                                width: '250px'
                            }}
                        />
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
                <Link
                    to="/profile/register"
                    style={{
                        color: 'black',
                        cursor: 'pointer',
                        marginLeft: 75
                    }}
                >
                    <Button
                        size='small'
                        type='dashed'
                    >
                        Registrar-se
                    </Button>
                </Link>
            </div>
        </div>
    );
};