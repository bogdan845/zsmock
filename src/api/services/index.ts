import latestNews from "../news/latest";
import singlePost from "../news/singlePost"
import blog from "../news/blog"
import offers from "../specialOffers/offers";
import singleOffer from "../specialOffers/singleOffer"

const api = {
    news: {
        latestNews,
        singlePost,
        blog,
    },
    specialOffers: {
        offers,
        singleOffer
    }
}

export default api