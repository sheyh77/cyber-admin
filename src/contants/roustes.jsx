import Brands from "../pages/Brands";
import Category from "../pages/Category";
import Dashboard from "../pages/Dashboard";
import Products from "../pages/Products";

export const routes = [
    {
        path: "/",
        element: <Dashboard />
    },
    {
        path: "/products",
        element: <Products />
    },
    {
        path: "/brands",
        element: <Brands />
    },
    {
        path: "/category",
        element: <Category />
    },
    {
        path: "*",
        element: <Dashboard />
    }
]