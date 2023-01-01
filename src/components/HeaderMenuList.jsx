import React from 'react';
import HeaderMenu from "./HeaderMenu";
import style from "./Header.module.css";

const HeaderMenuList = ({ menuList, onClick }) => {
    return (
        <div className={style.menu_list}>
            <div onClick={onClick}>{menuList.menu}
                <span className="material-icons-outlined">
                    expand_more
                </span>
            </div>
            <ul>
                {menuList.subMenu.map((subMenu, index) => {
                    return <HeaderMenu key={index + 1} href={subMenu.href} menu={subMenu.menu} />
                })}
            </ul>
        </div>
    );
}

export default HeaderMenuList;