import React, {useState} from "react";
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import {HiChevronDown} from "react-icons/hi"
import {BREAKPOINTS} from "../../../GlobalStyles/constants/breakpoints/breakpoints";


const MenuItem = styled.li`
    font-size: inherit;
    color: #fff;
    position: relative;
    font-weight: 600;
    padding: 0 10px;
    width: 100%;
`;

const NavLink = styled(Link)`
    color: inherit;
    text-decoration: none;
    transition: .25s ease-in-out;
    font-weight: inherit;
    
    &:hover {
        color: var(--yellow);
    }
`;

const SubMenu = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0 0 0 var(--gutter) ;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 5px;
    
    
    @media (min-width: ${BREAKPOINTS.lg}) {
        position: absolute;
        width: auto;
        padding: 0;
        z-index: 10;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
    }
`;

const SubMenuItem = styled.li`
    color: #fff;
    padding: 10px 10px;
    font-weight: 500;
    color: var(--green);
`;

const SubNavLink = styled(Link)`
    color: inherit;
    text-decoration: none;
    transition: .25s ease-in-out;
    font-weight: inherit;
    
    &:hover {
        color: var(--yellow);
    }
`;

MenuItem.defaultProps = {
    theme: {
        width: "auto"
    }
}


interface IMenuItemKeys {
    label: string;
    url: string;
};

interface IBaseMenu {
    label: string;
    url: string;
    isOpened?: boolean | undefined;
    dropDown?: IMenuItemKeys[];
};

interface IMenuDropDown {
    item: IBaseMenu
    menuHandler: () => void;
};


export function MenuItems({item, menuHandler}: IMenuDropDown) {
    const {t} = useTranslation();
    const [subMenu, setSubMenu] = useState(item.isOpened);
    const handleSubMenu = () => {
        setSubMenu(!subMenu);
        console.log(subMenu);
    }

    return (
        <MenuItem theme={item.dropDown ? {width: "calc(100% + 30px)"} : null}>
            <NavLink to={item.url} onClick={menuHandler}>
                {t(`header.nav.${item.label}.label`)}
            </NavLink>
            {item.dropDown && item.dropDown.length
                ? <span><HiChevronDown size={"20px"} onClick={handleSubMenu}/></span>
                : null
            }
            {subMenu && item.dropDown && item.dropDown.length
                ? <SubMenu>
                    {item.dropDown.map((subItem, index) => (
                        <SubMenuItem key={index}>
                            <SubNavLink to={subItem.url} onClick={menuHandler}>
                                {t(`header.nav.${item.label}.dropDown.${subItem.label}`)}
                            </SubNavLink>
                        </SubMenuItem>
                    ))}
                </SubMenu>
                : null
            }
        </MenuItem>
    )
}