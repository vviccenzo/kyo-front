import React, { useState } from 'react';
import { Input, Select, Button, Form } from 'antd';

const { Option } = Select;

export default function NewCommunity() {
    const [form] = Form.useForm();
    const [community, setCommunity] = useState({
        name: '',
        description: '',
        topics: [],
        members: [],
        admins: [],
        visibility: ''
    });

    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        setCommunity({
            ...community,
            [name]: value,
        });
    };

    const handleSelectChange = (value: any, name: any) => {
        setCommunity({
            ...community,
            [name]: value,
        });
    };

    const handleSubmit = () => {
        console.log(community);
    };

    return (
        <Form
            form={form}
            onFinish={handleSubmit}
            style={{
                backgroundColor: '#f5f5f5',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
            }}
        >
            <Form.Item
                label="Nome"
                name="name"
                style={{ marginBottom: '16px' }}
            >
                <Input
                    placeholder="Nome"
                    name="name"
                    onChange={handleInputChange} />
            </Form.Item>
            <Form.Item
                label="Descrição"
                name="description"
                style={{ marginBottom: '16px' }}
            >
                <Input.TextArea
                    placeholder="Descrição"
                    rows={4}
                    name="description"
                    onChange={handleInputChange} />
            </Form.Item>
            <Form.Item
                label="Tópicos"
                name="topics"
                style={{ marginBottom: '16px' }}
            >
                <Select
                    mode="multiple"
                    placeholder="Selecione os Tópicos"
                    onChange={(value) => handleSelectChange(value, 'topics')}>
                    <Option value="Tópico 1">Tópico 1</Option>
                    <Option value="Tópico 2">Tópico 2</Option>
                </Select>
            </Form.Item>
            <Form.Item
                label="Membros"
                name="members"
                style={{ marginBottom: '16px' }}
            >
                <Select
                    mode="multiple"
                    placeholder="Selecione os Membros"
                    onChange={(value) => handleSelectChange(value, 'members')}>
                    <Option value="Membro 1">Membro 1</Option>
                    <Option value="Membro 2">Membro 2</Option>
                </Select>
            </Form.Item>
            <Form.Item
                label="Administradores"
                name="admins"
                style={{ marginBottom: '16px' }}
            >
                <Select
                    mode="multiple"
                    placeholder="Selecione os Administradores"
                    onChange={(value) => handleSelectChange(value, 'admins')}>
                    <Option value="Admin 1">Admin 1</Option>
                    <Option value="Admin 2">Admin 2</Option>
                </Select>
            </Form.Item>
            <Form.Item
                label="Visibilidade"
                name="visibility"
                style={{ marginBottom: '16px' }}
            >
                <Select
                    placeholder="Selecione a Visibilidade"
                    onChange={(value) => handleSelectChange(value, 'visibility')}>
                    <Option value="public">Público</Option>
                    <Option value="private">Privado</Option>
                    <Option value="invite">Somente convidados</Option>
                </Select>
            </Form.Item>
            <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                >
                    Enviar
                </Button>
            </Form.Item>
        </Form>
    );
};
