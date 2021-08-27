/*
* pagesTitle
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
        label: "home",
        url: "/",
        component: Home,
        dropDown: [
            {
                label: "busServices",
                url: "/bus-services",
                component: BusServices
            },
            {
                label: "mediaServices",
                url: "/media-services",
                component: MediaServices
            }
        ]
    },
    {
        label: "aboutUs",
        url: "/about",
        component: AboutUs,
        dropDown: [
            {
                label: "busServices",
                url: "/bus-services",
                component: BusServices
            },
            {
                label: "mediaServices",
                url: "/media-services",
                component: MediaServices
            }
        ]
    },
    {
        label: "fq",
        url: "/fq",
        component: ForumQuestions
    },
    {
        label: "departurePlaces",
        url: "/departure-places",
        component: DeparturePlaces
    },
    {
        label: "vacancies",
        url: "/vacancies",
        component: Vacancies
    },
    {
        label: "contacts",
        url: "/contacts",
        component: Contacts
    }
]


