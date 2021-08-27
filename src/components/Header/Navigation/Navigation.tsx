import React, {useState} from 'react';
import {TOP_NAV} from "../../../utils/constants/topNav/topNav";
import {Link} from "react-router-dom";
import {IBaseMenuDropDown} from "../../../utils/interfaces/nav/nav";
import {Dropdown} from "./Layouts/Dropdown";
import {useTranslation} from "react-i18next";


export function Navigation() {
    const [subNav, setSubNav] = useState(false);
    const showSubNav = () => setSubNav(!subNav);
    const {t} = useTranslation();

    const renderNav = TOP_NAV.map((item: IBaseMenuDropDown, index) => {
        const dropDown = item.dropDown && item.dropDown.length ? item.dropDown : '';
        return !dropDown
            ? <li key={index} className="header-menu__item">
                <Link to={item.url}>
                    {t(`header.nav.${item.label}.label`)}
                </Link>
            </li>
            : <li id={String(index)} key={index}
                  className={"header-menu__item with-dropdown"}>
                <Link to={item.url}>{t(`header.nav.${item.label}.label`)}</Link>
                <i className="header-menu__dropdown-btn bi bi-chevron-down"></i>
                <Dropdown
                    key={index}
                    parentLabel={item.label}
                    subMenuId={index}
                    subMenu={dropDown}
                />
            </li>
    });
    return (
        <>
            <i className="header-menu__btn bi bi-list"></i>
            <ul className={"header-menu"}>
                {renderNav}
            </ul>
        </>
    )
}