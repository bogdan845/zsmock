const BACKEND_API = "http://localhost:3000/";
const WORDPRESS_API = 'https://zs7.com.ua/wp-json/wp/v2'


export const APP_URLS = {
    auth: {
        login: BACKEND_API + '/login'
    },
    news: {
        latest: WORDPRESS_API + '/posts?categories=2&_embed&per_page=3&context=view',
        all: WORDPRESS_API + '/posts?categories=2&_embed&per_page=10&page=',
        single: WORDPRESS_API + "/posts?categories=2&_embed&per_page=1&context=view&slug="
        // posts?categories=2&_embed&per_page=1&context=view&slug=podarunkovi-sertifikati

    },
}
