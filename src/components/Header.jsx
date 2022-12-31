import React from "react";
import { Link } from 'react-router-dom';
import style from "./Header.module.css";
import HeaderMenuList from "./HeaderMenuList";
import HeaderMenu from "./HeaderMenu";

const Header = () => {

    let menu = [
        { type: "menu", href: "/", menu: "Home" },
        {
            type: "menu_list",
            href: "/about",
            menu: "About",
            subMenu: [{ href: "/about/notice", menu: "Notice" },
            { href: "/about/view", menu: "Veiw" },
            { href: "/about/directions", menu: "Direction" }]
        },
        { type: "menu", href: "/room", menu: "Room" },
        { type: "menu", href: "/service", menu: "Service" },
    ];

    let menuHtml = menu.map((menu, index) => {
        if (menu.type === "menu_list") {
            return <HeaderMenuList key={index + 1} menuList={menu} />
        } else if (menu.type === "menu") {
            return <HeaderMenu key={index + 1} href={menu.href} menu={menu.menu} />
        }
    });

    return (
        <div className={style.header}>
            <Link to="/" className={style.logo}><img src="/logo.png" alt=""/>동궁펜션</Link>
            <div className={style.menu}>
                {menuHtml}
            </div>
        </div>
    );
}

export default Header;