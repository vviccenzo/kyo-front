import React from 'react';
import Avatar from '@mui/material/Avatar';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { DiNetbeans } from 'react-icons/di';
import { Button, Menu, Select } from 'antd';
import { Link } from 'react-router-dom';
import { useMeuContext } from '../../context/Context';
import profileItemsModule from './MenuProfileItems';
import NotificationIcon from './notification/NotificationIcon';

const { Option } = Select;

interface HeaderItemsProps {
    setCollapsed: (collapsed: boolean) => void;
    collapsed: boolean;
}

const HeaderItems = ({ setCollapsed, collapsed }: HeaderItemsProps) => {
    const { profileItems, profileItemsLogged } = profileItemsModule;
    const { isLogged, user, selectedLanguage, setSelectedLanguage } = useMeuContext();

    const languageOptions = [
        { key: 'ptBr', label: 'Português - Br' },
        { key: 'en', label: 'Inglês' },
        { key: 'es', label: 'Espanhol' },
    ];

    const handleLanguageChange = (value: string) => {
        setSelectedLanguage(value);
    };

    const stringToColor = (string: string) => {
        let hash = 0;

        for (let i = 0; i < string.length; i += 1) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }

        let color = '#';

        for (let i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.slice(-2);
        }

        return color;
    };

    const stringAvatar = (name: string) => {
        const nameParts = name.split(' ');

        if (nameParts.length >= 2) {
            return {
                sx: {
                    bgcolor: stringToColor(name),
                },
                children: `${nameParts[0][0]}${nameParts[1][0]}`,
            };
        } else if (nameParts.length === 1) {
            return {
                sx: {
                    bgcolor: stringToColor(name),
                },
                children: nameParts[0][0],
            };
        }

        return {};
    };

    const menu = [
        {
            key: 'Menu',
            icon: <Avatar {...stringAvatar(user.name || '')} />,
            children: isLogged ? profileItems : profileItemsLogged,
        },
    ];

    return (
        <>
            <div style={{ display: 'flex' }}>
                <Button
                    type="text"
                    icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    onClick={() => setCollapsed(!collapsed)}
                    style={{
                        fontSize: '16px',
                        width: 64,
                        height: 64,
                    }}
                />
                <Button
                    type="text"
                    style={{
                        fontSize: '16px',
                        height: 64,
                        display: 'flex',
                    }}
                >
                    <Link to="/home">
                        <DiNetbeans
                            style={{
                                display: 'flex',
                                marginTop: 13,
                                cursor: 'pointer',
                                width: 30,
                                height: 30,
                                color: 'black',
                            }}
                        />
                    </Link>
                </Button>
            </div>
            {isLogged === 'true' && (
                <div
                    className="icon-profile-name"
                    style={{
                        display: 'flex',
                    }}
                >
                    <Select
                        defaultValue={selectedLanguage}
                        style={{
                            width: 131,
                            paddingTop: 17,
                        }}
                        onChange={handleLanguageChange}
                        className="remove-arrow"
                    >
                        {languageOptions.map((option) => (
                            <Option key={option.key} value={option.key}>
                                {option.label}
                            </Option>
                        ))}
                    </Select>
                    <NotificationIcon />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        style={{
                            background: 'white',
                            backgroundColor: 'white',
                            marginTop: -3,
                        }}
                        defaultSelectedKeys={['2']}
                        items={menu}
                    />
                </div>
            )}
        </>
    );
};

export default HeaderItems;
