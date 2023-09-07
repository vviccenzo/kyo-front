import { HiOutlineUserCircle, HiMiniArrowLeftOnRectangle } from "react-icons/hi2";
import { iconDefaultStyle, spanDefaultStyle } from "./styles/Styles.ts";
import { Link } from "react-router-dom";

import React from 'react';

import "./ProfileMenu.css";

export default function ProfileMenu({ onClose }) {

    const handleLogout = () => {
        onClose();
    };

    return (
        <div className="profile-menu">
            <div style={{
                display: "flex",
                justifyContent: "flex-start"
            }}>
                <Link
                    className="link-default-style"
                    to="/profile"
                >
                    <HiOutlineUserCircle
                        style={iconDefaultStyle}
                    />
                    <span
                        style={spanDefaultStyle}
                    >
                        Perfil
                    </span>
                </Link>
            </div>
            <div>
                <Link
                    className="link-default-style"
                    to="/"
                >
                    <HiMiniArrowLeftOnRectangle
                        style={iconDefaultStyle}
                    />
                    <span
                        onClick={handleLogout}
                        style={spanDefaultStyle}
                    >
                        Sair
                    </span>
                </Link>
            </div>
        </div>
    );
}
