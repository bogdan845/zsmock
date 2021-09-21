import React, {useState} from "react";
import styled from "styled-components";
import {APP_NAV} from "../../../../utils/constants/appNav";
import {Menu} from "./Menu";
import {HiMenu} from "react-icons/hi";
import {BREAKPOINTS} from "../../../GlobalStyles/constants/breakpoints/breakpoints";


const Nav = styled.nav`
    width: 100%;
`;

const MenuIcon = styled.span`
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 1.5rem;
   position: fixed;
   top: 100px;
   right: 15px;
   background-color: var(--green);
   height: 2.5rem;
   width: 2.5rem;
   border-radius: 100%;
   z-index: 20;
   cursor: pointer;
   
   &.active {
        border: 2px solid #fff;
   }
   
   @media (min-width: ${BREAKPOINTS.lg}) {
        display: none;
   } 
`;


export function TopNav() {
    const [toggler, setToggler] = useState(false);
    const menuHandler = () => setToggler(!toggler);
    return (
        <Nav>
            <MenuIcon className={toggler ? "active" : ""}>
                <HiMenu
                    onClick={menuHandler}
                    style={{color: "inherit", fontSize: "inherit"}}
                />
            </MenuIcon>
            <Menu menu={APP_NAV.menuNav} menuHandler={menuHandler}/>
        </Nav>
    )
}