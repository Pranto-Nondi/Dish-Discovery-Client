import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/Home/Home/Home";
import Recipes from "../../layout/Recipes";
import RecipeDetails from "../../pages/RecipeDetails/RecipeDetails";
import LoginLayout from "../../layout/LoginLayout";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Blog from "../../pages/Blog/Blog";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement:<ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: (() => fetch(`https://modern-chef-recipe-site-server.vercel.app/chefs`))
            },
            {
                path:'/blog',
                element:<Blog/>
            }


        ]
    },
    {
        path: '/',
        element: <Recipes />,
        children: [
            {
                path: '/recipeDetails/:id',
                element: <PrivateRoute><RecipeDetails /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://modern-chef-recipe-site-server.vercel.app/chefs/${params.id}`)


            }
        ]
    },
    {
        path: '/',
        element: <LoginLayout />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            }
        ]

    }
]);
export default router