import {ITextBanner} from "../../interfaces/textBanner/textBanner";

/*
* images
* */
import map from "../../../assets/images/google-map.jpg"
import bus from "./../../../assets/images/bus.webp"

interface IRow {
    image: string;
    banner: ITextBanner;
};

export const FIRM_SERVICES: IRow[] = [
    {
        image: map,
        banner: {
            label: "Міжнародні рейси",
            labelLink: "#",
            text: "Компанія ЗЕЛЕНИЙ СЛОН 7 у партнерстві з Transtempo здійснює міжнародний маршрут до Чехії та Республіки Польща.",
            btnLabel: "Детальніше",
            btnLink: "#"
        }
    },
    {
        image: bus,
        banner: {
            label: "Оренда VIP-трансферу",
            labelLink: "#",
            text: "Якщо Ви цінуєте час і індивідуальний якісний \n" +
                "сервіс, пропонуємо вашій увазі пасажирські\n" +
                "перевезення VIP класу.",
            btnLabel: "Детальніше",
            btnLink: "#"
        }
    }
]