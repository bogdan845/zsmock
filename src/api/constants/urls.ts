const BACKEND_API = "http://localhost:3000/";
const WORDPRESS_API = 'https://zs7.com.ua/wp-json/wp/v2'


export const APP_URLS = {
    auth: {
        login: BACKEND_API + '/login'
    },
    pages: {
        homeUrl: "/",
        personalAcc: "/acc",
        offers: {
            routes: {
                offersPage: "/special_offers",
                single: "/special_offers/:slug",
            },
            requests: {
                offers: WORDPRESS_API + "/posts?categories=3&_embed&context=view",
                single: WORDPRESS_API + "/posts?categories=3&_embed&context=view&slug="
            }
        },
        carPark: "/car_park",
        internationalFlights: "/international_flights",
        vipAutoRental: "/vip_auto_rental",
        news: {
            routes: {
                newsPage: "/blog",
                single: "/blog/:slug",
                pagination: "/blog/page/:page",
            },
            requests: {
                latest: WORDPRESS_API + '/posts?categories=2&_embed&per_page=3&context=view',
                news: WORDPRESS_API + '/posts?categories=2&_embed&context=view&per_page=10&page=',
                single: WORDPRESS_API + "/posts?categories=2&_embed&per_page=1&context=view&slug="
            },
        },
        benefits: "/benefits"
    }
}
