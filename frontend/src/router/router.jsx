import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Home from "../pages/home/home"
import About from "../pages/miniPage/About"
import Privacy from "../pages/miniPage/Privacy"
import ContactUs from "../pages/miniPage/ContactUs"

const router=createBrowserRouter([
{
    path:"/",
    element: <App/>,
    children:[
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"/about-us",
            element:<About/>
        },
        {
            path:"/privacy",
            element:<Privacy/>
        },
        {
            path:"/contact",
            element:<ContactUs/>
        }
    ]
}
])

export default router

