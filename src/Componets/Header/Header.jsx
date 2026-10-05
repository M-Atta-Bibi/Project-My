import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { BsListUl } from "react-icons/bs";
import Button from "../common/Button";
import { useTheme } from "../../context/theme/useTheme";
import { useDispatch, useSelector } from "react-redux";
import LanguageSwitcher from "../language-switcher";
import { useTranslation } from "react-i18next";
import { getAccessToken, clearAccessToken } from "../../helpers/cookies";
import pathConstants from "../../routes/pathConstants";
import { FiHeart } from "react-icons/fi";
import {
  CoBut,
  Container,
  HeaderContainer,
  Logo,
  MenuIcon,
  NavWrapper,
} from "./style";

const Header = () => {
  // Hooks
  const { t } = useTranslation();

  // States
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme("");
  const navigate = useNavigate();

  // Function
  const isAuthenticated = !!getAccessToken();
  const handleLogout = () => {
    clearAccessToken();
    navigate(pathConstants.Login);
  };

  return (
    <Container>
      <HeaderContainer>
        {/*------------------------*/}
        <Logo>
          <h2>DKUST</h2>
        </Logo>
        {/*------------------------*/}
        <NavWrapper $isOpen={isOpen}>
          <NavLink
            to="/Home"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {t("HOME")}
          </NavLink>
          <NavLink
            to="/ABOUT"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {t("ABOUT")}{" "}
          </NavLink>
          <NavLink
            to="/PORTFOLIO"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {t("PORTFOLIO")}
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {t("PRODUCTS")}
          </NavLink>
          <NavLink
            to="/SERVICES"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {t("SERVICES")}
          </NavLink>
          <NavLink
            to="/BLOG"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {t("BLOG")}
          </NavLink>
          <NavLink
            to="/RESOURES"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {t("RESOURCES")}
          </NavLink>
          <NavLink
            to="/Quiz"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {t("QUIZ")}
          </NavLink>
          <NavLink
            to="/CONTACT"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {t("CONTACT")}
          </NavLink>
          {isAuthenticated ? (
            <>
              <Button
                label={t("LOGOUT")}
                onClickFunction={() => handleLogout()}
              />
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                border="true"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {t("LOGIN")}
              </NavLink>
              <NavLink
                to="/register"
                border="true"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {t("REGISTER")}
              </NavLink>
            </>
          )}
        </NavWrapper>
        {/*------------------------*/}
        <CoBut>
          <Button
            className="LDm"
            label={theme === "light" ? t("DARK") : t("LIGHT")}
            onClickFunction={toggleTheme}
          />
          <MenuIcon onClick={() => setIsOpen(!isOpen)}>
            <BsListUl />
          </MenuIcon>
          <LanguageSwitcher />
          <Button
            className="LDm"
            label={<FiHeart size={20} />}
            onClickFunction={() => navigate("/Favorites")}
          />
        </CoBut>
        {/*------------------------*/}
      </HeaderContainer>
    </Container>
  );
};
export default Header;
