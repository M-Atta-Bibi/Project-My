import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import "./assets/styles/index.css";
import { AppProvider } from "./context/AppProvider";
import { Provider } from "react-redux";
import { store } from "./store/index";
import routes from "./routes";
import Layout from "./Componets/layout";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: routes,
    },
  ]);
  return (
    <AppProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </AppProvider>
  );
}
export default App;
