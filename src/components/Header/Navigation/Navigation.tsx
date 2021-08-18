import React from 'react';
import {TOP_NAV} from "../../../utils/constants/topNav/topNav";
import {Link} from "react-router-dom";
import {IBaseMenuDropDown} from "../../../utils/interfaces/nav/interface";


export function NavItem() {
    const renderNav = TOP_NAV.map((item: IBaseMenuDropDown, index) => {
        const dropDown = item.dropDown && item.dropDown.length ? item.dropDown : '';
        return dropDown
            ? <li key={index} className="header-menu__item">
                <Link to={item.url}>{item.label}</Link>
            </li>
            : <li key={index} className="header-menu__item">
                <Link to={item.url}>{item.label}</Link>
            </li>
    })
    return (
        <ul className={"header-menu"}>
            {renderNav}
        </ul>
    )
}