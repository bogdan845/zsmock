import React, {useState} from "react";
import {LANGUAGES} from "../../../../utils/constants/langs/languages";
import {useTranslation} from "react-i18next";
import {HiChevronDown} from "react-icons/hi";
import {VscGlobe} from "react-icons/vsc"
import styled from "styled-components";


const LangBox = styled.div`
    margin-top: 10px;
    font-size: 0.875rem;
    position: relative;
    cursor: pointer;
`;

const DropDown = styled.div`
    position: absolute;
    border-radius: 5px;
    top: 40px;
    left: 50%;
    transform: translateX(-50%);
    width: auto;
    display: none;
    padding: 5px 0;
    background-color: #fff;
    border: 1px solid rgba(0,0,0,0.1);
    
    &:after {
        position: absolute;
        top: -11px; 
        content: "";
        width: 0;
        left:  50%;
        transform: translateX(-50%);
        height: 0; 
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid #fff;
    }
    
    &.active {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
`;

const DropDropDownBtn = styled.div`
    width: 100%;
    outline: none;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    color: #fff;
    transition: .25s ease-in-out;
    display: flex;
    flex-flow: row no-wrap;
    justify-content: flex-start;
    align-items: center;
    color: var(--text-color);
    font-weight: 500;
    padding: 5px 20px;
    
     &:last-child {
        border-bottom: none;
     }
    
    &:hover {
        background-color: var(--light-grey);
    }
    
    &.active {
        background-color: var(--light-grey);
    }
`;

const CurrentLang = styled.span`
    padding: 0 5px 0 10px;
    text-transform: capitalize;
`;

const LangImg = styled.img`
    max-width: 15px;
    height: auto;
`;

const LangLabel = styled.span`
    padding-left: 0.625rem; 
`


export function LangSwitcher() {
    const [toggler, setToggler] = useState(false);
    const {i18n} = useTranslation();

    const handleLangDropDown = () => setToggler(prevState => !prevState);
    const closeLangDropDown = () => setToggler(false);


    const langs = LANGUAGES.map(item => {
        return (
            <DropDropDownBtn
                key={item.abbreviation}
                className={`${i18n.language === item.abbreviation ? 'active' : ''}`}
                onClick={() => {
                    i18n.changeLanguage(item.abbreviation);
                    closeLangDropDown();
                }}>
                <LangImg src={item.img} alt={""}/>
                <LangLabel>{item.label}</LangLabel>
            </DropDropDownBtn>
        )
    })

    return (
        <LangBox onClick={handleLangDropDown}>
            <VscGlobe size={20}/>
            <CurrentLang>{i18n.language}</CurrentLang>
            <HiChevronDown size={20}/>
            <DropDown className={`${toggler ? 'active' : ''}`}>
                {langs}
            </DropDown>
        </LangBox>
    )
}