import { createBrowserRouter } from "react-router-dom";

import Main from "../../layout/Main";
import Home from "../../pages/Home/Home/Home";

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
]);
export default router