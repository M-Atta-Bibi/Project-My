import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import i18next from "i18next";
import {
  I18nextProvider,
  initReactI18next,
  useTranslation,
} from "react-i18next";
import { resources } from "./assets/locals";
import environment from "./environment";
import { useEffect } from "react";

i18next.use(initReactI18next).init({
  interpolation: { escapeValue: false },
  lng: localStorage.getItem(environment.lang) || "ar",
  resources,
});
const MainApp = () => {
  const { i18n } = useTranslation();
  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n?.language === "ar" ? "rtl" : "ltr";
  });
  return (
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MainApp />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
