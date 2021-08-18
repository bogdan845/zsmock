import React from "react";

/*
* images
* */
import ua from "../../assets/images/ua.jpg"
import uk from "../../assets/images/uk.jpg"
import ru from "../../assets/images/ru.jpg"


export function LangSwitcher() {
    return (
        <form className="lang">
            <label>Language </label>
            <select>
                <option value={"ua"}>UA</option>
                <option value={"ru"}>RU</option>
                <option value={"uk"}>UK</option>
            </select>
        </form>
    )
}