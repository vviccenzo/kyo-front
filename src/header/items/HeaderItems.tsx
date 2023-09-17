import React from "react";

import Avatar from "@mui/material/Avatar";

import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { DiNetbeans } from "react-icons/di";
import { Button, Menu } from "antd";

import profileItemsModule from "./MenuProfileItems";
import { useMeuContext } from "../../context/Context";

export default function HeaderItems({ setCollapsed, collapsed }): any {

    const { profileItems, profileItemsLogged } = profileItemsModule;
    const { userInfo } = useMeuContext();

    function stringToColor(string: string) {
        let hash = 0;
        let i;

        for (i = 0; i < string.length; i += 1) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }

        let color = "#";

        for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.slice(-2);
        }

        return color;
    }

    function stringAvatar(name: string) {
        return {
            sx: {
                bgcolor: stringToColor(name),
            },
            children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
        }
    }

    const menu = [
        {
            key: "Menu",
            icon: <Avatar {...stringAvatar("Vinicius Vicenzo")} />,
            children: userInfo.isLogged ? profileItems : profileItemsLogged
        },
    ];

    return (
        <>
            <div style={{ display: "flex" }}>
                <Button
                    type="text"
                    icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    onClick={() => setCollapsed(!collapsed)}
                    style={{
                        fontSize: "16px",
                        width: 64,
                        height: 64,
                    }}
                />
                <Button
                    type="text"
                    style={{
                        fontSize: "16px",
                        height: 64,
                        display: "flex",
                    }}
                    icon={
                        <DiNetbeans
                            style={{
                                display: "flex",
                                marginTop: 13,
                                cursor: "pointer",
                                width: 30,
                                height: 30,
                                color: "black",
                            }}
                        />
                    }
                />
            </div>
            <div
                className="icon-profile-name"
                style={{
                    display: "flex",
                }}
            >
                <Menu
                    theme="dark"
                    mode="horizontal"
                    style={{
                        background: "white",
                        backgroundColor: "white",
                        marginTop: -3
                    }}
                    defaultSelectedKeys={["2"]}
                    items={menu}
                />
            </div>
        </>
    );
}