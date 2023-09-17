import React, { useState } from "react";

import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import { Button } from "antd";
import { useMeuContext } from "../../context/Context";

export default function InputsProfile() {
    const { user } = useMeuContext();
    const [userForm, setUser] = useState({
        name: '',
        nickName: '',
    });

    const [selectedImage, setSelectedImage] = useState<string>("");
    const handleImageChange = (event: any) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl: string = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
        }
    };

    const handleSelectChange = (event: any) => {
        const { name, value } = event.target;
        setUser({
            ...userForm,
            [name]: value,
        });
    };

    const handlePost = async () => {

        const formData = new FormData();
        formData.append('userId', 1);
        formData.append('name', userForm.name);
        formData.append('nickName', userForm.nickName);
        formData.append('avatarPath', selectedImage);

        try {
            const response = await fetch('http://localhost:8080/kyo/userForm/update-userForm', {
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
    };

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 20
            }}>
            <div>
                <Avatar
                    alt="userForm Avatar"
                    src={selectedImage}
                    style={{ border: '1px gray solid' }}
                    sx={{ width: 100, height: 100 }}
                />
                <input
                    style={{ paddingTop: 20 }}
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                />
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 15
            }}>
                <TextField
                    label="Nome"
                    onChange={handleSelectChange}
                    id="outlined-size-small"
                    defaultValue={user.name}
                    size="small"
                    style={{
                        width: 250
                    }}
                />
                <TextField
                    label="Apelido"
                    id="outlined-size-small"
                    defaultValue={user.nickName}
                    size="small"
                    style={{
                        width: 250
                    }}
                />
            </div>

            <Button type="primary" onClick={handlePost}>
                Salvar
            </Button>
        </div>
    );
}