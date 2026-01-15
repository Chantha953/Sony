import React from "react";
import Header from "./components/Header";
import "./index.css";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/CartPage";
import ErrorPage from "./pages/ErrorPage";
import ContactPage from "./pages/ContactPage";
import SignInPage from "./auth/SignInPage";
import SignUpPage from "./auth/SignUpPage";
import GalleryPage from "./pages/GalleryPage";
import CheckoutPage from "./pages/CheckoutPage";
import InfoLayout from "./Layouts/InfoLayout";
import ProfilePage from "./pages/ProfilePage";
import OrderPage from "./pages/OrderPage";
import ProtectRoute from "./routes/ProtectRoute";
import SignOutPage from "./auth/SignOutPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "product",
        element: <ProductPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "gallery",
        element: <GalleryPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "signin",
        element: <SignInPage />,
      },
      {
        path: "signup",
        element: <SignUpPage />,
      },
      {
        path: "checkout",
        element: (
          <ProtectRoute>
            <CheckoutPage />
          </ProtectRoute>
        ),
      },
      {
        path: "information",
        element: (
          <ProtectRoute>
            <InfoLayout />
          </ProtectRoute>
        ),
        children: [
          {
            index: true,
            element: <ProfilePage />,
          },
          {
            path: "profile",
            element: <ProfilePage />,
          },
          {
            path: "orders",
            element: <OrderPage />,
          },
          {
            path: "signout",
            element: <SignOutPage/>,
          },
        ],
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
