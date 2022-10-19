import { createBrowserRouter } from "react-router-dom";
import Category from "../../components/Category/Category/Category";
import Home from "../../components/Home/Home/Home";
import News from "../../components/News/News/News";
import Main from "../../layouts/Main";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/news/:id',
                element: <News></News>
            },
            {
                path: '/category/:id',
                element: <Category></Category>
            },
        ]
    }
])