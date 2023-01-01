import React from "react";
import style from "./Header.module.css";
import { Link } from 'react-router-dom';
import { removeMenu } from "./Header";

const HeaderMenu = ({href,menu}) => {
    return (
        <Link to={href} onClick={removeMenu}>
            {menu}
        </Link>
    );
}

export default HeaderMenu;
