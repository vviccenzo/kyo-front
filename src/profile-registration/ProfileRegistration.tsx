import React, { useState } from "react";

import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

import './ProfileRegistration.css';

export default function ProfileRegistration() {
    const [selectedImage, setSelectedImage] = useState<string>("");
    const [userData, setUserData] = useState({
        name: '',
        nickname: '',
        email: '',
        confirmEmail: '',
        password: '',
        confirmPassword: ''
    });

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl: string = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async () => {
        const formData = new FormData();

        formData.append('name', userData.name);
        formData.append('nickName', userData.nickname);
        formData.append('email', userData.email);
        formData.append('confirmEmail', userData.confirmEmail);
        formData.append('password', userData.password);
        formData.append('confirmPassword', userData.confirmPassword);
        formData.append('image', selectedImage);
        formData.append('levelPermissionType', 'USER');

        try {
            const response = await fetch('http://localhost:8080/kyo/user', {
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
        <div className="inputs" style={{ paddingTop: 10 }}>
            <div style={{ marginBottom: 20 }}>
                <Avatar
                    alt="User Avatar"
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
            <div style={{ marginBottom: 10 }}>
                <TextField
                    label="Name"
                    name="name"
                    value={userData.name}
                    id="outlined-size-small"
                    size="small"
                    onChange={handleInputChange}
                />
            </div>
            <div style={{ marginBottom: 10 }}>
                <TextField
                    label="Nickname"
                    name="nickname"
                    value={userData.nickname}
                    id="outlined-size-small"
                    size="small"
                    onChange={handleInputChange}
                />
            </div>
            <div style={{ marginBottom: 10 }}>
                <TextField
                    label="E-mail"
                    name="email"
                    value={userData.email}
                    id="outlined-size-small"
                    size="small"
                    onChange={handleInputChange}
                />
            </div>
            <div style={{ marginBottom: 10 }}>
                <TextField
                    label="Password"
                    name="password"
                    value={userData.password}
                    id="outlined-size-small"
                    size="small"
                    onChange={handleInputChange}
                />
            </div>
            {/* <div style={{ marginBottom: 10 }}>
                <TextField
                    label="Confirm password"
                    name="confirmPassword"
                    value={userData.confirmPassword}
                    id="outlined-size-small"
                    size="small"
                    onChange={handleInputChange}
                />
            </div> */}
            <div
                className="buttons-register"
                style={{
                    display: 'flex',
                    gap: 80,
                    placeContent: 'center',
                    paddingTop: 30
                }}>
                <Button>Cancel</Button>
                <Button
                    variant="contained"
                    onClick={handleSubmit}
                >
                    Register
                </Button>
            </div>
        </div>

    );
}