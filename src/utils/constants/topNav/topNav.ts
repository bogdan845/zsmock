/*
* pages
* */
import {Home} from "../../../pages/Home/Home";
import {AboutUs} from "../../../pages/AboutUs/AboutUs";
import {BusServices} from "../../../pages/AboutUs/Children/BusServices";
import {MediaServices} from "../../../pages/AboutUs/Children/MediaServices";
import {ForumQuestions} from "../../../pages/ForumQuestions/ForumQuestions";
import {DeparturePlaces} from "../../../pages/DeparturePlaces/DeparturePlaces";
import {Vacancies} from "../../../pages/Vacancies/Vacancies";
import {Contacts} from "../../../pages/Contacts/Contacts";

/*
* interface
* */
import {IBaseMenuDropDown} from "../../interfaces/nav/nav";

export const TOP_NAV: IBaseMenuDropDown[] = [
    {
        label: "Головна",
        url: "/",
        component: Home,
        dropDown: [
            {
                label: "Послуги в атобосі",
                url: "/bus-services",
                component: BusServices
            },
            {
                label: "Медіасервіси",
                url: "/media-services",
                component: MediaServices
            }
        ]
    },
    {
        label: "Про нас",
        url: "/about",
        component: AboutUs,
        dropDown: [
            {
                label: "Послуги в атобосі",
                url: "/bus-services",
                component: BusServices
            },
            {
                label: "Медіасервіси",
                url: "/media-services",
                component: MediaServices
            }
        ]
    },
    {
        label: "Часті запитання",
        url: "/fq",
        component: ForumQuestions
    },
    {
        label: "Місця відправки",
        url: "/departure-places",
        component: DeparturePlaces
    },
    {
        label: "Вакансії",
        url: "/vacancies",
        component: Vacancies
    },
    {
        label: "Контаки",
        url: "/contacts",
        component: Contacts
    }
]


