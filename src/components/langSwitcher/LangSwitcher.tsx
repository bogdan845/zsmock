import React, {useState} from "react";
/*
* images
* */
// import ukrainian from "../../assets/images/ukrainian.jpg"
// import uk from "../../assets/images/uk.jpg"
// import ru from "../../assets/images/ru.jpg"
import {LANGUAGES} from "../../utils/constants/langs/languages";
import {useTranslation} from "react-i18next";

export function LangSwitcher() {
    const [toggler, setToggler] = useState(false);
    const {t, i18n} = useTranslation();

    const handleLangDropDown = () => setToggler(prevState => !prevState);
    const closeLangDropDown = () => setToggler(false);
    const langs = Object.keys(LANGUAGES).map(item => (
        <button
            key={item}
            className={`lang__drop-down-item ${i18n.language === item ? 'active' : ''}`}
            onClick={() => {
                i18n.changeLanguage(item);
                closeLangDropDown()
            }}>{item}
        </button>
    ))
    return (
        <div className="lang">
            <span>{i18n.language}</span>
            <i onClick={handleLangDropDown} className="bi bi-chevron-down"></i>
            <div className={`lang__drop-down ${toggler ? 'active' : ''}`}>
                {langs}
            </div>
        </div>
    )
}