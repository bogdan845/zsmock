import styled from "styled-components";
import {TOP_NAV} from "../../../utils/constants/topNav/topNav";
import {MenuItems} from "./MenuItems";


const Nav = styled.nav`
    width: 100%;
`;

const Menu = styled.ul`
    margin: 0;
    padding: 0;
    width: 100%;
    list-style-type: none;
    display: flex;
    justify-content: center;
    font-size: 0.875rem;
`


export function TopNav() {
    return (
        <Nav>
            <Menu>
                {TOP_NAV.map((item, index) => (
                    <MenuItems key={index} item={item}/>
                ))}
            </Menu>
        </Nav>
    )
}
