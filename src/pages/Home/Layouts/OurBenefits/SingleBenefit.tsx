import React from 'react';

import {IOurBenefits} from "../../../../utils/interfaces/ourBenefits/ourBenefits";


export function SingleBenefit({label, link, icon}: IOurBenefits) {
    return (
        <div className="col-12 col-md-4">
            <a target="_self" href={link} className="benefit">
                <div className="benefit__icon-border">
                    <i className={`benefit__icon ${icon}`}></i>
                </div>
                <h5 className="benefit__label">{label}</h5>
            </a>
        </div>
    )
}