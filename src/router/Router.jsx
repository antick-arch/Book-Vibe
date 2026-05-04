import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/homepage/HomePage"
import Books from  "../pages/books/Books"
import ErrorPage from "../errorPage/ErrorPage";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children:[
        {
            index: true,
            Component: HomePage
        },
        {
            path: '/home',
            Component: HomePage
        },
        {
            path: '/books',
            Component: Books
        }
    ],
    errorElement: <ErrorPage />
  },
]);