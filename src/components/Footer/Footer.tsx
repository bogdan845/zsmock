import React from "react";
import {SOCIALS} from "../../utils/constants/socials/socials";
import {useTranslation} from "react-i18next";

interface IProps {
    contractLink: string
}

export function Footer({contractLink}: IProps) {
    const {t} = useTranslation();
    const renderSocials = SOCIALS.map((item, index) => (
        <li key={index}>
            <a href={item.link} target="_self">
                <i className={item.icon}></i>
            </a>
        </li>
    ));

    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 align-self-center">
                        <div className="footer-bottom">
                            <span
                                className="footer-copyright">
                                {t("footer.copyright.text") + "© 2005"} - {new Date().getFullYear()}
                            </span>
                            <a className="footer-contract" href={contractLink}>
                                {t("footer.publicOffer.text")}
                            </a>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 align-self-center">
                        <ul className="footer-socials">
                            {renderSocials}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}