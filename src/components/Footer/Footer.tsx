import React from "react";
import {SOCIALS} from "../../utils/constants/socials/socials";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import styled from "styled-components";


const FooterBox = styled.footer`
    margin-top: auto;
    background-color: var(--grey);
    color: #fff;
    padding: 20px 0;
`;

const BottomText = styled.div`
    display: flex;
    flex-direction: column;
    color: #fff;
    fot-size: 0.875rem;
`;

const Contracts = styled.a`
    color: #fff;
    text-decoration: none;
    transition: .25s ease-in-out;
    
    &:hover {
        color: var(--yellow);
    }
`;

const Socials = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: row;
    padding: 0;
    margin: 0;
`;

const SocialsItem = styled.li`
    padding: 5px 15px;
    i {
        color: #fff;
        font-size: 20px;
        transition: .25s ease-in-out;
        
        &:hover {
            color: var(--yellow);
        }
    }
`;


interface IProps {
    contractLink: string
}


export function Footer({contractLink}: IProps) {
    const {t} = useTranslation();
    const renderSocials = SOCIALS.map((item, index) => (
        <SocialsItem key={index}>
            <Link to={item.link}>
                <i className={item.icon}></i>
            </Link>
        </SocialsItem>
    ));

    return (
        <FooterBox>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 align-self-center">
                        <BottomText>
                            <span
                                className="footer-copyright">
                                {t("footer.copyright.text") + "© 2005"} - {new Date().getFullYear()}
                            </span>
                            <Contracts href={contractLink} target="_blank">
                                {t("footer.publicOffer.text")}
                            </Contracts>
                        </BottomText>
                    </div>
                    <div className="col-12 col-md-6 align-self-center">
                        <Socials className="footer-socials">
                            {renderSocials}
                        </Socials>
                    </div>
                </div>
            </div>
        </FooterBox>
    )
}