import React from 'react';
import {IOurBenefits} from "../../../../utils/interfaces/ourBenefits/ourBenefits";
import {Link} from "react-router-dom";
import styled from "styled-components";

/*
* styled start
* */

const IconBorder = styled.div`
    height: 3.25rem;
    min-width: 3.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .25s ease-in-out;
    border: 2px solid #fff;
    border-radius: 100%;
`;

const Icon = styled.i`
    font-size: 1.25rem;
    color: #fff;
    position: relative;
    transition: .25s ease-in-out;
`;

const ItemLabel = styled.h6`
    font-size: 1.025rem;
    color: #fff;
    padding-left: 20px;
    margin-bottom: 0;
    font-weight: 400;
    text-decoration: none;
    transition: .25s ease-in-out;
`;

const ItemLink = styled(Link)`
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: calc(var(--gutter) * 2) var(--gutter);
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
    
    &: hover {
        ${ItemLabel} {
            color: var(--yellow);
        }
        
        ${IconBorder} {
            border-radius: 0;
            border-color: var(--yellow);
        }
        
        ${Icon} {
            color: var(--yellow)
        }
    }
`;


export function SingleBenefit({label, link, icon}: IOurBenefits) {
    return (
        <div className="col-12 col-md-6 col-lg-4">
            <ItemLink to={link}>
                <IconBorder>
                    <Icon className={icon}/>
                </IconBorder>
                <ItemLabel>{label}</ItemLabel>
            </ItemLink>
        </div>
    )
}