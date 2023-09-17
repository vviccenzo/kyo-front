import React from "react";

import { Button } from "antd";

import {
    HiOutlineUserCircle,
} from "react-icons/hi2";

import { Link } from "react-router-dom";
import Logout from "./functions/Logout.tsx";

const profileItemsLogged: any = [];

const profileItems: any = [
    {
        type: "item",
        icon: (
            <Link to="/profile">
                <Button
                    icon={<HiOutlineUserCircle style={{ color: 'white' }} />}
                    style={{
                        fontSize: "16px",
                        background: "black",
                        border: "none",
                    }}
                />
            </Link>
        ),
        label: "Perfil",
    },
    {
        type: "item",
        icon: (<Logout />),
        label: "Sair",
    },
]

const exportedObject = { profileItems, profileItemsLogged };

export default exportedObject;