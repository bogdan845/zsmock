import React, {useState} from 'react';
import {TOP_NAV} from "../../../utils/constants/topNav/topNav";
import {Link} from "react-router-dom";
import {IBaseMenuDropDown} from "../../../utils/interfaces/nav/nav";
import {Dropdown} from "./Layouts/Dropdown";


export function Navigation() {
    const [id, setId] = useState(-1);

    // const handleDropDown = (id: number) => () => (setId(() => id))
    const handleDropDown = (id: number) => () => setId(() => id);

    const renderNav = TOP_NAV.map((item: IBaseMenuDropDown, index) => {
        const dropDown = item.dropDown && item.dropDown.length ? item.dropDown : '';
        return !dropDown
            ? <li key={index} className="header-menu__item">
                <Link to={item.url}>{item.label}</Link>
            </li>
            : <li key={index} className="header-menu__item with-dropdown">
                <Link to={item.url}>{item.label}</Link>
                <i onClick={handleDropDown(index)} className="header-menu__dropdown-btn bi bi-chevron-down"></i>
                <Dropdown
                    key={index}
                    activeId={id}
                    subMenuId={index}
                    subMenu={dropDown}
                />
            </li>
    })
    return (
        <ul className={"header-menu"}>
            {renderNav}
        </ul>
    )
}