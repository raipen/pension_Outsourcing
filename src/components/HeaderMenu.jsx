import React from "react";
import { Link } from 'react-router-dom';
import style from "./Header.module.css";

const HeaderMenu = ({href,menu}) => {
    return (
        <Link to={href}>
            {menu}
        </Link>
    );
}

export default HeaderMenu;
