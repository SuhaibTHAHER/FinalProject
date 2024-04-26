import React from 'react'
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layout/Root';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import NotFound from './Pages/NotFound/NotFound';
import Cart from './Pages/Cart/Cart';
import Profile from './Pages/Profile/profile';
import ProtectedRouter from './auth/ProtectedRouter/ProtectedRouter';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserContextProvider from './assets/Conext/User/User';
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Categories from './Components/Catigories/Categories';
const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/home",
        element: 
        <Home />,
      },
      {
        path: "/about",
        element:
         <About />
      },
      {
        path: "/login",
        element: 
        <Login />,
      },
      {
        path: "/Register",
        element: 
        <Register />,
      },
      {
        path: "/Cart",
        element: 
        <Cart />,
      },
      {
        path: "/Profile",
        element: 
        <Profile />,
      },
      {
        path: "/ForgotPassword",
        element: 
        <ForgotPassword />,
      },
      {
        path: "/Categories",
        element: 
        <Categories />,
      },
      {
        path: "*",
        element: 
        <NotFound />,
      },
    ],
  }
  


]);
function App() {
  return (
    <>
    <UserContextProvider>
    <RouterProvider router={router} />
    </UserContextProvider>
    
    <ToastContainer />
    </>
  )
}

export default App