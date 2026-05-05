import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/homepage/HomePage"
import Books from  "../pages/books/Books"
import ErrorPage from "../errorPage/ErrorPage";
import BookDetails from "../pages/bookDetails/BookDetails";
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
            path: "/booksDetails/:bookId",
            Component: BookDetails,
        },
        {
            path: '/books',
            Component: Books
        }
    ],
    errorElement: <ErrorPage />
  },
]);