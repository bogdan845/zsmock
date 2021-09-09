const BACKEND_API = "https://app.zs7.com.ua/BusScheduler/site";
const WORDPRESS_API = 'https://zs7.com.ua/wp-json/wp/v2'
// const WORDPRESS_STYLES = "http://zs7.com.ua/wp-content/uploads/elementor/css/";


// {{zs7}}/wp-content/uploads/elementor/css/post-3025.css?Origin=https://zs7.com.ua&Host=app.zs7.com.ua&Referer=https://zs7.com.ua

// {{zs7}}/wp-content/uploads/elementor/css/post-3025.css
// post-3025.css


export const APP_URLS = {
    searchTickets: {
        tickets: BACKEND_API + "/mobile/ticket/search",
        routes: BACKEND_API + "/mobile/place/all"
    },
    pages: {
        aboutUs: {
            main: WORDPRESS_API + "/pages/27",
            mediaService: WORDPRESS_API + "/pages/2100",
            busService: WORDPRESS_API + "/pages/2098"
        },
        frequentlyQ: WORDPRESS_API + "/quick_faq?quick_faq_tax=9&per_page=100",
        departurePlaces: WORDPRESS_API + "/pages/2502",
        vacancies: WORDPRESS_API + "/pages/33",
        contacts: WORDPRESS_API + "/pages/3025",
        offers: {
            blog: WORDPRESS_API + "/posts?categories=3&_embed&context=view",
            single: WORDPRESS_API + "/posts?categories=3&_embed&context=view&slug="
        },
        carPark: WORDPRESS_API + "/pages/2996",
        interFlights: WORDPRESS_API + "/pages/981",
        vipAutoRental: WORDPRESS_API + "/pages/1618",
        support: WORDPRESS_API + "/posts/1249?_embed",
        payment: WORDPRESS_API + "/posts/2736?_embed",
        drivers: WORDPRESS_API + "/posts/1272?_embed",
        waitingHall: WORDPRESS_API + "/posts/2330?_embed",
        coffee: WORDPRESS_API + "/posts/2483?_embed",
        news: {
            latest: WORDPRESS_API + '/posts?categories=2&_embed&per_page=3&context=view',
            blog: WORDPRESS_API + '/posts?categories=2&_embed&context=view&per_page=10&page=',
            single: WORDPRESS_API + "/posts?categories=2&_embed&per_page=1&context=view&slug="
        },
    }
};