import BlogPage from "../pages/BlogPage/BlogPage";
import CollectionPage from "../pages/CollectionPage/CollectionPage";
import ContactPage from "../pages/ContactPage/ContactPage";
import HomePage from "../pages/HomePage/HomePage";
import PageAll from "../pages/PagesAll/PageAll";
import ShopPage from "../pages/ShopPage/ShopPage";

export const routers = [
    {
        path: "/",
        page: HomePage,
        isShowHearder: true,
    },
    {
        path: "/shop",
        page: ShopPage,
        isShowHearder: true,
    },
    {
        path: "/collection",
        page: CollectionPage,
        isShowHearder: true,
    },
    {
        path: "/blogs",
        page: BlogPage,
        isShowHearder: true,
    },
    {
        path: "/contact",
        page: ContactPage,
        isShowHearder: true,
    },
    {
        path: "/Pages",
        page: PageAll,
        isShowHearder: true,
    }

]