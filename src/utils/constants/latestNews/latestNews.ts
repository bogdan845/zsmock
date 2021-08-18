/*
* images
* */

import zs_bus from "./../../../assets/images/zs-bus.jpg";
import kid from "./../../../assets/images/kid.jpg";
import certificate from "./../../../assets/images/certificate.jpg";

interface IPostPreview {
    img: string;
    link: string
}

interface IPostContent extends IPostPreview {
    content: {
        label: string;
        excerpt: string
    }
}

export const LATEST_NEWS: IPostContent[] = [
    {
        img: zs_bus,
        link: "#",
        content: {
            label: "Плануєте відправитися в Аеропорт Бориспіль!?",
            excerpt: "На жаль зараз час в дорозі дещо збільшено через ремонт траси «Київ — Харків»😣⠀В середньому затримка триває 30.."
        }
    },
    {
        img: certificate,
        link: "#",
        content: {
            label: "Подарункові сертифікати!",
            excerpt: "Хочете приємно здивувати важливу для вас людину? Подарункові сертифікати від «Зелений Слон 7» чудово підійдуть для будь- якої..."
        }
    },
    {
        img: kid,
        link: "#",
        content: {
            label: "Що може бути краще, ніж сімейна подорож?",
            excerpt: "Правильно! Тільки безпечна та комфортна подорож! Ми подбали про це, та для наших маленьких пасажирів маємо зручні автокрісла...."
        }
    },
]