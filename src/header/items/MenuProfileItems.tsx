import React from "react";

import { Button } from "antd";

import {
    HiOutlineUserCircle,
    HiMiniArrowLeftOnRectangle,
} from "react-icons/hi2";

import { Link } from "react-router-dom";

function logout() {
    setUserInfo({
        isLogged: false
    });
    localStorage.setItem('isLogged', 'false');
}

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
        icon: (
            <Link to="/" onClick={() => logout()}>
                <Button
                    icon={
                        <HiMiniArrowLeftOnRectangle
                            style={{
                                color: 'white'
                            }}
                        />
                    }
                    style={{
                        fontSize: "16px",
                        background: "black",
                        border: "none",
                    }}
                />
            </Link>
        ),
        label: "Sair",
    },
]

export default { profileItems, profileItemsLogged} ;