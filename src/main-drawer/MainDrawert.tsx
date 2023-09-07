import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { HiUserGroup } from "react-icons/hi2";

import { useNavigate } from 'react-router-dom';

import './main-drawer.css'

type Anchor = 'top' | 'left' | 'bottom' | 'right';

const routes = {
    routesSideBar: [
        {
            name: 'Home',
            path: '/',
            Icon: HomeIcon
        },
        {
            name: 'Register',
            path: '/profile/register',
            Icon: AccountCircleIcon
        },
        {
            name: 'Community',
            path: '/community',
            Icon: HiUserGroup
        }
    ],
};

export default function TemporaryDrawer({
    isOpenDrawer,
    handleDrawer
}) {
    const navigate = useNavigate();

    const toggleDrawer = (anchor: Anchor, open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event.type === 'keydown' &&
                ((event as React.KeyboardEvent).key === 'Tab' ||
                    (event as React.KeyboardEvent).key === 'Shift')
            ) {
                return;
            }
        };

    const list = (anchor: Anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {routes.routesSideBar.map(({ name, Icon, path }) => (
                    <ListItem key={name} disablePadding>
                        <ListItemButton onClick={() => navigate(path)}>
                            <ListItemIcon>
                                <Icon />
                            </ListItemIcon>
                            <ListItemText primary={name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            <Drawer
                anchor={'left'}
                open={isOpenDrawer}
                onClose={handleDrawer}
            >
                {list('left')}
            </Drawer>
        </div >
    );
}
