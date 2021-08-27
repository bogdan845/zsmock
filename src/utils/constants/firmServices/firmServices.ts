import {ITextBanner} from "../../interfaces/textBanner/textBanner";

/*
* images
* */
import map from "../../../assets/images/google-map.jpg"
import bus from "./../../../assets/images/bus.webp"
import {APP_URLS} from "../../../api/constants/urls";

interface IRow {
    image: string;
    banner: ITextBanner;
};

export const FIRM_SERVICES: IRow[] = [
    {
        image: map,
        banner: {
            label: "internationalFlights",
            labelLink: APP_URLS.pages.internationalFlights,
            text: "Компанія ЗЕЛЕНИЙ СЛОН 7 у партнерстві з Transtempo здійснює міжнародний маршрут до Чехії та Республіки Польща.",
            btnLabel: "Детальніше",
            btnLink: APP_URLS.pages.internationalFlights
        }
    },
    {
        image: bus,
        banner: {
            label: "vipCar",
            labelLink: APP_URLS.pages.vipAutoRental,
            text: "Якщо Ви цінуєте час і індивідуальний якісний \n" +
                "сервіс, пропонуємо вашій увазі пасажирські\n" +
                "перевезення VIP класу.",
            btnLabel: "Детальніше",
            btnLink: APP_URLS.pages.vipAutoRental
        }
    }
]