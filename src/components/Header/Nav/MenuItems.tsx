import React, {useState} from "react";
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import {HiChevronDown} from "react-icons/hi"
import {BREAKPOINTS} from "../../GlobalStyles/constants/breakpoints/breakpoints";


/*
* styled start
* */

const MenuItem = styled.li`
font-size: inherit;
    color: #fff;
    padding: 5px 10px;
    position: relative;
    font-weight: 600;
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
    background-color: var(--green);
    
    @media (min-width: ${BREAKPOINTS.lg}) {
        position: absolute;
        z-index: 10;
        top: 100%;
        left: 0;
    }
`;

const SubMenuItem = styled.li`
    color: #fff;
    padding: 10px 10px;
    font-weight: 400;
`;

MenuItem.defaultProps = {
    theme: {
        width: "auto"
    }
}

/*
* styled end
* */


/*
* interface start
* */

interface IMenuItemKeys {
    label: string;
    url: string;
}

interface IBaseMenu {
    label: string;
    url: string;
    dropDown?: IMenuItemKeys[];
}

interface IMenuDropDown {
    item: IBaseMenu
}

/*
interface end
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
                ? <HiChevronDown size={"20px"} onClick={handleSubMenu}/>
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