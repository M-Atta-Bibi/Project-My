import React from "react";
import pathConstants from "./pathConstants";
import PrivateRoutes from "../Componets/routes/PrivateRoutes";
const HomePage = React.lazy(() => import("../pages/Home"));
const LoginPage = React.lazy(() => import("../pages/Login"));
const ProductsPage = React.lazy(() => import("../pages/Products"));
const QuizPage = React.lazy(() => import("../pages/Quiz"));
const RegisterPage = React.lazy(() => import("../pages/Register"));
const DetailsPage = React.lazy(() => import("../pages/Products/Details"));
const FavoritesPage = React.lazy(() => import("../pages/Favorites"));
const ServicesPage = React.lazy(() => import("../pages/Services"));
const BlogPage = React.lazy(() => import("../pages/Blog"));
const AboutPage = React.lazy(() => import("../pages/About"));

const routes = [
  { path: pathConstants.Register, element: <RegisterPage /> },
  { path: pathConstants.Login, element: <LoginPage /> },
  {
    element: <PrivateRoutes />,
    children: [
      { path: pathConstants.Home0, element: <HomePage /> },
      { path: pathConstants.Home, element: <HomePage /> },
      { path: pathConstants.Products, element: <ProductsPage /> },
      { path: pathConstants.Quiz, element: <QuizPage /> },
      { path: pathConstants.Details, element: <DetailsPage /> },
      { path: pathConstants.Favorites, element: <FavoritesPage /> },
      { path: pathConstants.Services, element: <ServicesPage /> },
      { path: pathConstants.Blog, element: <BlogPage /> },
      { path: pathConstants.About, element: <AboutPage /> },
    ],
  },
];
export default routes;
