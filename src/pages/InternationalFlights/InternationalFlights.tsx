import React from "react";
import {IPageTitle} from "../../utils/interfaces/pagesTitle/pagesTitle";


export function InternationalFlights({title}: IPageTitle) {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {title}
                    </div>
                </div>
            </div>
        </section>
    )
}