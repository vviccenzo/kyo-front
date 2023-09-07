import React from "react";

import { Input, Button, Divider } from 'antd';
import { Link } from "react-router-dom";

import "./community.css";

export default function Community() {
    return (
        <div>
            <Link to={"/community/newCommunity"}>
                <Button type="dashed">
                    New Community
                </Button>
            </Link>
            <Divider />
            <div>
                <Input
                    className="input-text-area"
                    placeholder="Write a comment."
                />
            </div>
        </div>
    );
}