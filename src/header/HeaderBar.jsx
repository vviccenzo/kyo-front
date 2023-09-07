import { DiNetbeans } from "react-icons/di";
import { Link } from "react-router-dom";
import { useState } from "react";

import React from "react";
import Avatar from "@mui/material/Avatar";
import TemporaryDrawer from "../main-drawer/MainDrawert.tsx";
import AppsIcon from "@mui/icons-material/Apps";
import stringAvatar from "./functions/stringAvatar.js";
import ProfileMenu from "./profileMenu/ProfileMenu.tsx";

import "./headerbar.css";

export default function HeaderBar() {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  function handleDrawer() {
    setIsOpenDrawer(!isOpenDrawer);
  }

  return (
    <div className="header-bar-principal">
      <div className="header-bar">
        <div
          style={{
            display: "flex",
          }}
        >
          <AppsIcon
            style={{
              display: "flex",
              paddingTop: 7,
              paddingLeft: 10,
              cursor: "pointer",
              width: 30,
              height: 35,
              color: "white",
            }}
            onClick={handleDrawer}
          />
          <Link to="/">
            <DiNetbeans
              style={{
                display: "flex",
                marginTop: 7,
                cursor: "pointer",
                width: 35,
                height: 35,
                color: "white",
              }}
            />
          </Link>
        </div>
        <TemporaryDrawer
          isOpenDrawer={isOpenDrawer}
          handleDrawer={handleDrawer}
        />

        <Avatar
          onClick={toggleMenu}
          style={{
            marginTop: 5,
            marginRight: 5,
            cursor: "pointer",
          }}
          {...stringAvatar("Vinicius Vicenzo")}
        />
      </div>
      <div className="header-bar-info">
        {isMenuOpen && <ProfileMenu onClose={toggleMenu} />}
      </div>
    </div>
  );
}
