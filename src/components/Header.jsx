import React,{useEffect} from "react";
import { Link } from 'react-router-dom';
import style from "./Header.module.css";
import HeaderMenuList from "./HeaderMenuList";
import HeaderMenu from "./HeaderMenu";
import BlurCircle from "./BlurCircle";

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

    const toggleMenu = () => {
        let menu = document.getElementsByClassName(style.menu)[0];
        menu.classList.toggle(style.active);
        let menuList = document.getElementsByClassName(style.menu_list)[0];
        menuList.classList.remove(style.active);
    }

    const toggleMenuList = (e) => {
        let menuList = document.getElementsByClassName(style.menu_list)[0];
        menuList.classList.toggle(style.active);
    }

    //menu가 열려있을 때, 다른 메뉴를 클릭하거나 윈도우를 클릭하면 메뉴를 닫는다.
    
    let menuHtml = menu.map((menu, index) => {
        if (menu.type === "menu_list") {
            return <HeaderMenuList onClick={toggleMenuList} key={index + 1} menuList={menu} />
        } else if (menu.type === "menu") {
            return <HeaderMenu key={index + 1} href={menu.href} menu={menu.menu} />
        }
        return null;
    });

    return (
        <div className={style.header}>
            <Link to="/" className={style.logo}><img src="/logo.png" alt="" />동궁펜션</Link>
            <div className={"material-icons-outlined "+style.hamburger} onClick={toggleMenu}>
                menu
            </div>
            <div className={style.menu}>
                {menuHtml}
                <BlurCircle top="-100vw" left="-15vw" m_top="-15vw" color="#80E8FF" />
                <BlurCircle right="-15vw" bottom="-100vw" m_bottom="-15vw" color="#FFAEFC" />
            </div>
        </div>
    );
}

export default Header;