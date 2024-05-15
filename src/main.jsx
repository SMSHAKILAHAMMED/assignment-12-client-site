import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App.jsx';
import Home from './Pages/Home/Home.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import Login from './Pages/Login/Login.jsx';
import Register from './Pages/Register/Register.jsx';
import Gallary from './Pages/Gallary/Gallary.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Roots from './Roots/Roots.jsx';
import ViewDetails from './Components/ViewDetails/ViewDetails.jsx';
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';
import AllBooks from './Components/AllBooks/AllBooks.jsx';
import AddBook from './MongoDB/AddBook/AddBook.jsx';
import BookCard from './MongoDB/BookCard/BookCard.jsx';
import BorrowedBooks from './Components/BorrowedBooks/BorrowedBooks.jsx';
import UpdateBooks from './MongoDB/UpdateBooks/UpdateBooks.jsx';
import AddBorrowedBooks from './Components/AddBorrowedBooks/AddBorrowedBooks.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://assignment-11-seven-beta.vercel.app/book'),
      },
      {
        path: '/allBooks',
        element: <PrivateRoute> <AllBooks></AllBooks> </PrivateRoute>,
        loader: () => fetch('https://assignment-11-seven-beta.vercel.app/book'),
      },
      {
        path: '/borrowedBooks',
        element: <PrivateRoute> <BorrowedBooks></BorrowedBooks> </PrivateRoute>,
      },
      {
        path: '/gallary',
        element: <Gallary></Gallary>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/addbook',
        element: <PrivateRoute> <AddBook></AddBook> </PrivateRoute>,
      },
      {
        path: '/addBorrowedBooks',
        element: <PrivateRoute><AddBorrowedBooks></AddBorrowedBooks></PrivateRoute>,
      },
      {
        path: '/roots',
        element: <Roots></Roots>,
      },
      {
        path: '/bookCard',
        element: <BookCard></BookCard>,
      },
      {
        path: '/viewDetails/:_id',
        element: <ViewDetails></ViewDetails>,
      },
      {
        path: '/updateCard/:id',
        element: <PrivateRoute> <UpdateBooks></UpdateBooks> </PrivateRoute>,
        loader: ({ params }) => fetch(`https://assignment-11-seven-beta.vercel.app/book/${params.id}`),
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider router={router}>
        <RouterProvider router={router} />
      </AuthProvider>
  </React.StrictMode>,
)
