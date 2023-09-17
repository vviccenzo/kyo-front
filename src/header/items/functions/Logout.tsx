import React from "react";
import { Button } from "antd";
import { HiMiniArrowLeftOnRectangle } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { useMeuContext } from "../../../context/Context";

const Logout = () => {
    const { setIsLogged } = useMeuContext();

    function logout() {
        localStorage.setItem('isLogged', 'false');
        localStorage.removeItem('user');
        setIsLogged('false');
    }

    return (
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
    );
}

export default Logout;
