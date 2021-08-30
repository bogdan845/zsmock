import React, {useState} from "react";
import styled from "styled-components";
import {TOP_NAV} from "../../../utils/constants/topNav/topNav";
import {MenuItems} from "./MenuItems";
import {HiMenu} from "react-icons/hi";
import {BREAKPOINTS} from "../../GlobalStyles/constants/breakpoints/breakpoints";


/*
* styled start
* */

const Nav = styled.nav`
    width: 100%;
    // position: relative;
`;

const Menu = styled.ul`
    margin: 0;
    padding: calc(var(--gutter) * 2) var(--gutter);
    width: 100%;
    list-style-type: none;
    display: none;
    font-size: 0.875rem;
    position: absolute;
    z-index: 10;
    background: var(--green);
    width: 100%;
    top: 100%;
    left: 0;
    height: calc(100vh - 87px);
    
    &.active {
        display: flex;
        flex-direction: column;
    }
    
    @media (min-width: ${BREAKPOINTS.lg}) {
        position: static;
        height: auto;
        display: flex;
        justify-content: space-between;
    }
`
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
   
   &.active {
        border: 2px solid #fff;
   }
   
   
   @media (min-width: ${BREAKPOINTS.lg}) {
        display: none;
   } 
`

/*
* styled end
* */


export function TopNav() {
    const [toggler, setToggler] = useState(false);
    const menuHandler = () => setToggler(!toggler);
    console.log(toggler);
    return (
        <Nav>
            <MenuIcon className={toggler ? "active" : ""}>
                <HiMenu onClick={menuHandler} style={{color: "inherit", fontSize: "inherit"}}/>
            </MenuIcon>
            <Menu className={toggler ? "active" : ""}>
                {TOP_NAV.map((item, index) => (
                    <MenuItems key={index} item={item}/>
                ))}
            </Menu>
        </Nav>
    )
}
