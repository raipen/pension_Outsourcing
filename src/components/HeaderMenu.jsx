import React from "react";
import { Link } from 'react-router-dom';

const HeaderMenu = ({href,menu}) => {
    return (
        <Link to={href}>
            {menu}
        </Link>
    );
}

export default HeaderMenu;
