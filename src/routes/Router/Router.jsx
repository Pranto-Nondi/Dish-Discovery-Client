import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/Home/Home/Home";
import Recipes from "../../layout/Recipes";
import RecipeDetails from "../../pages/RecipeDetails/RecipeDetails";
import LoginLayout from "../../layout/LoginLayout";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: (() => fetch(`http://localhost:3000/chefs`))
            },


        ]
    },
    {
        path: '/',
        element: <Recipes />,
        children: [
            {
                path: '/recipeDetails/:id',
                element: <RecipeDetails />,
                loader: ({ params }) => fetch(`http://localhost:3000/chefs/${params.id}`)


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