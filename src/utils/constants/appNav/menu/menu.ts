import {Home} from "../../../../pages/Home/Home";
import {BusService} from "../../../../pages/AboutUs/Children/BusService";
import {MediaService} from "../../../../pages/AboutUs/Children/MediaService";
import {AboutUs} from "../../../../pages/AboutUs/AboutUs";
import {FrequentlyQ} from "../../../../pages/FrequentlyQ/FrequentlyQ";
import {DeparturePlaces} from "../../../../pages/DeparturePlaces/DeparturePlaces";
import {Vacancies} from "../../../../pages/Vacancies/Vacancies";
import {Contacts} from "../../../../pages/Contacts/Contacts";

/*
* interface
* */
export interface IBaseMenu {
    label: string;
    url: string;
    component: () => JSX.Element;
};

interface IMenuDropDown extends IBaseMenu {
    dropDown?: IBaseMenu[];
}


export const MENU_NAV: IMenuDropDown[] = [
    {
        label: "home",
        url: "/",
        component: Home,
        dropDown: [
            {
                label: "busServices",
                url: "/bus_service",
                component: BusService
            },
            {
                label: "mediaServices",
                url: "/media_service",
                component: MediaService
            }
        ]
    },
    {
        label: "aboutUs",
        url: "/about_us",
        component: AboutUs,
        dropDown: [
            {
                label: "busServices",
                url: "/bus_service",
                component: BusService
            },
            {
                label: "mediaServices",
                url: "/media_service",
                component: MediaService
            }
        ]
    },
    {
        label: "fq",
        url: "/frequently_questions",
        component: FrequentlyQ
    },
    {
        label: "departurePlaces",
        url: "/departure_places",
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
];