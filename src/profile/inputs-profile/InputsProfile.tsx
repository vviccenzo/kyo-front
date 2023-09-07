import React from "react";

import TextField from '@mui/material/TextField';

export default function InputsProfile() {

    return (
        <div
            style={{
                display: 'flex',
                paddingTop: 500,
                gap: 15
            }}>
            <TextField
                label="Name"
                id="outlined-size-small"
                defaultValue="Small"
                size="small"
            />
            <TextField
                label="Nickname"
                id="outlined-size-small"
                defaultValue="Small"
                size="small"
            />
        </div>
    );
}