import React, {useState} from "react";
import {LANGUAGES} from "../../utils/constants/langs/languages";
import {useTranslation} from "react-i18next";
import {HiChevronDown} from "react-icons/hi";
import styled from "styled-components";
/*
* images
* */
// import ukrainian from "../../assets/images/ukrainian.jpg"
// import uk from "../../assets/images/uk.jpg"
// import ru from "../../assets/images/ru.jpg"

/*
* styled start
* */
const LangBox = styled.div`
    margin-top: 10px;
    font-size: 0.875rem;
    position: relative;
`;

const DropDown = styled.div`
    position: absolute;
    top: 100%;
    right: 0;
    display: none;
    
    &.active {
        display: flex;
        flex-direction: column;
    }
`;

const DropDropDownBtn = styled.button`
    border: 1px solid #fff;
    outline: none;
    border-radius: 5px;
    color: #fff;
    transition: .25s ease-in-out;
    background: var(--green);
    
    &:hover {
        background-color: #fff;
        color: var(--green);
        border-color: var(--green);
    }
    &.active {
        background-color: #fff;
        color: var(--green);
        border-color: var(--green);
    }
`;

const CurrentLang = styled.span`
    padding-right: 5px;
`;

/*
* styled end
* */


export function LangSwitcher() {
    const [toggler, setToggler] = useState(false);
    const {i18n} = useTranslation();

    const handleLangDropDown = () => setToggler(prevState => !prevState);
    const closeLangDropDown = () => setToggler(false);
    const langs = Object.keys(LANGUAGES).map(item => (
        <DropDropDownBtn
            key={item}
            className={`${i18n.language === item ? 'active' : ''}`}
            onClick={() => {
                i18n.changeLanguage(item);
                closeLangDropDown()
            }}>{item}
        </DropDropDownBtn>
    ));

    return (
        <LangBox>
            <CurrentLang>{i18n.language}</CurrentLang>
            <HiChevronDown size={20} onClick={handleLangDropDown}/>
            <DropDown className={`${toggler ? 'active' : ''}`}>
                {langs}
            </DropDown>
        </LangBox>
    )
}