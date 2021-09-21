import React, {useState} from "react";
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import {HiChevronDown} from "react-icons/hi"
import {BREAKPOINTS} from "../../../GlobalStyles/constants/breakpoints/breakpoints";



const MenuBox = styled.ul`
  margin: 0;
  padding: calc(var(--gutter) * 2) var(--gutter);
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style-type: none;
  font-size: 0.875rem;
  background: var(--green);
`;


const MenuItem = styled.li`
  font-size: inherit;
  color: #fff;
  position: relative;
  font-weight: 600;
  padding: 0 10px;

  span {
    position: absolute;
  }
`;

const NavLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  font-weight: inherit;

  &:hover {
    color: var(--yellow);
  }
`;

const SubMenu = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0 0 0 var(--gutter);
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 5px;

  @media (min-width: ${BREAKPOINTS.lg}) {
    border-radius: 5px;
    position: absolute;
    min-width: 200px;
    width: 100%;
    z-index: 10;
    top: 40px;
    left: 50%;
    transform: translateX(-50%);
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 5px 0;

    &:after {
      position: absolute;
      top: -11px;
      content: "";
      width: 0;
      left: 50%;
      transform: translateX(-50%);
      height: 0;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-bottom: 10px solid #fff;
    }
  }
`;

const SubMenuItem = styled.li`
  padding: 10px 10px;
  font-weight: 500;
  color: var(--green);

  @media (min-width: ${BREAKPOINTS.lg}) {
    padding: 5px 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    &:hover {
      background-color: var(--light-grey);
    }
  }
`;

const SubNavLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  font-weight: inherit;

  &:hover {
    color: var(--green);
  }

  @media (min-width: ${BREAKPOINTS.lg}) {
    display: inline-block;
    width: 100%;
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
}

interface IBaseMenu {
    label: string;
    url: string;
    dropDown?: IMenuItemKeys[];
}

interface IMenuDropDown {
    menu: IBaseMenu[];
    menuHandler: () => void;
}


export function Menu({menu, menuHandler}: IMenuDropDown) {
    const {t} = useTranslation();
    const [subMenu, setSubMenu] = useState(-1);
    const handleSubMenu = (id: number) => () => {
        if (subMenu === id) {
            return setSubMenu(() => -1)
        }
        setSubMenu(() => id)
    }

    const renderMenuItems = menu.map((item, index) => (
        <MenuItem key={index}>
            <NavLink to={item.url}>
                {t(`header.nav.${item.label}.label`)}
            </NavLink>
            {item.dropDown && item.dropDown.length
                ? <span><HiChevronDown size={"20px"} onClick={handleSubMenu(index)}/></span>
                : null
            }
            {subMenu === index && item.dropDown && item.dropDown.length
                ? <SubMenu>
                    {item.dropDown.map((sub, subIndex) => (
                        <SubMenuItem key={subIndex}>
                            <SubNavLink to={sub.url}>
                                {t(`header.nav.${item.label}.dropDown.${sub.label}`)}
                            </SubNavLink>
                        </SubMenuItem>
                    ))}
                </SubMenu>
                : null
            }
        </MenuItem>
    ));


    return (
        <MenuBox>
            {renderMenuItems}
        </MenuBox>
    )
}