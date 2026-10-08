import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import environment from "../../environment";
import Button from "../common/Button";
import { languages } from "../../assets/locals/index";

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const currentLang = i18n.language;
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const refreshPage = () => {
    navigate(0);
  };

  const switchLanguage = (langKey) => {
    Cookies.set(environment.localLang, langKey);
    localStorage.setItem(environment.lang, langKey);
    i18n.changeLanguage(langKey);
    refreshPage();
  };

  return (
    <div className="CoLng">
      <Button
        className="LDm"
        type="button"
        onClickFunction={() => setIsOpen((open) => !open)}
        label={currentLang === "ar" ? "عربي" : "EN"}
      />
      {isOpen && (
        <ul>
          {languages.map(
            (lang) =>
              lang.key !== currentLang && (
                <li>
                  <Button
                    className="DL"
                    type="button"
                    onClickFunction={() => switchLanguage(lang.key)}
                    label={lang.label}
                  />
                </li>
              ),
          )}
        </ul>
      )}
    </div>
  );
};
export default LanguageSwitcher;
