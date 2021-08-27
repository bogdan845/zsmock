import React, {useState} from "react";
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

import {RiArrowDownSFill} from "react-icons/ri"

/*
* interface start
* */

interface IBaseMenu {
    label: string;
    url: string;
    dropDown?: {
        label: string;
        url: string;
    }[]
}


interface IMenuDropDown {
    item: IBaseMenu
}

/*
interface end
* */


/*
* styled start
* */

const MenuItem = styled.li`
font-size: inherit;
    color: #fff;
    padding: 5px 10px;
    position: relative;
    width: ${props => props.theme.width};
`;

MenuItem.defaultProps = {
    theme: {
        width: "100%"
    }
}

const NavLink = styled(Link)`
    color: inherit;
    text-decoration: none;
    transition: .25s ease-in-out;
    width: 100%;
    
    &:hover {
        color: var(--yellow);
    }
`;

const SubMenu = styled.ul`
    top: 100%;
    left: 0;
    position: absolute;
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    background-color: var(--green);
    z-index: 10;
`

const SubMenuItem = styled.li`
    margin-top: 10px;
    color: #fff;
    padding: 0 10px;
`


/*
* styled end
* */


export function MenuItems({item}: IMenuDropDown) {
    const {t} = useTranslation();
    const [subMenu, setSubMenu] = useState(false);
    const handleSubMenu = () => setSubMenu(!subMenu);
    return (
        <MenuItem theme={item.dropDown ? {width: "calc(100% + 30px)"} : null}>
            <NavLink to={item.url}>
                {t(`header.nav.${item.label}.label`)}
            </NavLink>
            {item.dropDown && item.dropDown.length
                ? <RiArrowDownSFill size={"20px"} onClick={handleSubMenu}/>
                : null
            }
            {subMenu && item.dropDown && item.dropDown.length
                ? <SubMenu>
                    {item.dropDown.map((subItem, index) => (
                        <SubMenuItem key={index}>
                            <NavLink to={subItem.url}>
                                {t(`header.nav.${item.label}.dropDown.${subItem.label}`)}
                            </NavLink>
                        </SubMenuItem>
                    ))}
                </SubMenu>
                : null
            }
        </MenuItem>
    )
}