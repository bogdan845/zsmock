import React, {SetStateAction, useState} from 'react';
import {Link} from "react-router-dom";

interface IProps {
    activeId: number;
    subMenuId: number
}

interface IPropsMenu extends IProps {
    subMenu: {
        label: string;
        url: string;
    }[]
}


export function Dropdown({activeId, subMenuId, subMenu}: IPropsMenu) {
    const handleDropDown = activeId === subMenuId ? 'active' : '';
    const renderDropDown = subMenu.map((item, index) => (
        <li key={index} className="header-menu__sub-item">
            <Link to={item.url}>{item.label}</Link>
        </li>
    ))

    return (
        <ul className={`header-menu__sub ${handleDropDown}`}>
            {renderDropDown}
        </ul>
    )
}