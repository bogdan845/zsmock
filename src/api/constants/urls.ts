const BACKEND_API = "http://localhost:3000/";
const WORDPRESS_API = "http://localhost:3000/";

export const APP_URLS = {
    auth: {
        login: BACKEND_API + '/login'
    },
    news: {
        all: WORDPRESS_API + '/news'
    }
}
