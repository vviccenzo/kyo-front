import React from "react";

import { HiUserGroup } from "react-icons/hi2";
import { Link } from "react-router-dom";

const menuItems = [
  {
    key: "1",
    label: "Comunidades",
    icon: <Link to="/community"><HiUserGroup /></Link>,
  },
];

export default menuItems;