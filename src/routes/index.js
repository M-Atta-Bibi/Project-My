import React from "react";
import pathConstants from "./pathConstants";
import PrivateRoutes from "../Componets/routes/PrivateRoutes";
const HomePage = React.lazy(() => import("../pages/Home"));
const LoginPage = React.lazy(() => import("../pages/Login"));
const ProductsPage = React.lazy(() => import("../pages/Products"));
const QuizPage = React.lazy(() => import("../pages/Quiz"));
const RegisterPage = React.lazy(() => import("../pages/Register"));
const DetailsPage = React.lazy(() => import("../pages/Products/Details"));
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
    ],
  },
];
export default routes;
