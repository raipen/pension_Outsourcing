import React from "react";
import { Link } from 'react-router-dom';
import style from "./Header.module.css";

const Header = () => {
    return (
        <div className={style.header}>
            <Link to="/" className={style.logo}>Home</Link>
            <div className={style.menu}>
                <div className={style.menu_list}>
                    <p>About</p>
                    <ul>
                        <li><Link to="/about"><p>Intro</p></Link></li>
                        <li><Link to="/about/notice"><p>Notice</p></Link></li>
                        <li><Link to="/about/view"><p>View</p></Link></li>
                        <li><Link to="/about/directions"><p>Directions</p></Link></li>
                    </ul>
                </div>
                <Link to="/room"><p>Room</p></Link>
                <Link to="/service"><p>Service</p></Link>
            </div>
        </div>
    );
}

export default Header;