import React, { useState } from "react";

import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';

export default function InputsProfile() {

    const [selectedImage, setSelectedImage] = useState<string>("");
    const handleImageChange = (event: any) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl: string = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
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
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 15
            }}>
                <TextField
                    label="Name"
                    id="outlined-size-small"
                    defaultValue="Small"
                    size="small"
                    style={{
                        width: 250
                    }}
                />
                <TextField
                    label="Nickname"
                    id="outlined-size-small"
                    defaultValue="Small"
                    size="small"
                    style={{
                        width: 250
                    }}
                />
            </div>
        </div>
    );
}