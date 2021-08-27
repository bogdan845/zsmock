import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

interface IBaseProps {
    subMenuId: number
    parentLabel: string
}

interface IPropsMenu extends IBaseProps {
    subMenuProps?: {
        isActive: boolean,
        id: number
    }
    subMenu: {
        label: string;
        url: string;
    }[]
}


export function Dropdown({subMenuProps, subMenuId, parentLabel, subMenu}: IPropsMenu) {
    const {t} = useTranslation();

    const renderDropDown = subMenu.map((item, index) => (
        <li key={index} className="header-menu__sub-item">
            <Link to={item.url}>
                {t(`header.nav.${parentLabel}.dropDown.${item.label}`)}
            </Link>
        </li>
    ));

    return (
        <ul className={`header-menu__sub`}>
            {renderDropDown}
        </ul>
    )
}