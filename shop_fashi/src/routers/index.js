import BlogPage from "../pages/BlogPage/BlogPage";
import CollectionPage from "../pages/CollectionPage/CollectionPage";
import ContactPage from "../pages/ContactPage/ContactPage";
import HomePage from "../pages/HomePage/HomePage";
import Login from "../pages/LoginPage/Login";
import Register from "../pages/RegisterPage/Register";
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
        path: "/register",
        page: Register,
        isShowHearder: true,
    },
    {
        path: "/login",
        page: Login,
        isShowHearder : true,
    }

]