import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { BsListUl } from "react-icons/bs";
import Button from "../common/Button";
import { useTheme } from "../../context/theme/useTheme";
import LanguageSwitcher from "../language-switcher";
import { useTranslation } from "react-i18next";
import { getAccessToken, clearAccessToken } from "../../helpers/cookies";
import pathConstants from "../../routes/pathConstants";
import { FiHeart } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
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
  const favorites = useSelector((state) => state.favorite.Favorites);
  const buy = useSelector((state) => state.buy.productBuy);
  const qty = buy.reduce((sum, item) => sum + item.qty, 0);
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
            to={pathConstants.Home}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {t("HOME")}
          </NavLink>
          <NavLink
            to={pathConstants.About}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {t("ABOUT")}
          </NavLink>
          <NavLink
            to="/PORTFOLIO"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {t("PORTFOLIO")}
          </NavLink>
          <NavLink
            to={pathConstants.Products}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {t("PRODUCTS")}
          </NavLink>
          <NavLink
            to={pathConstants.Services}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {t("SERVICES")}
          </NavLink>
          <NavLink
            to={pathConstants.Blog}
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
            to={pathConstants.Quiz}
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
                className="BuLogOut"
                label={t("LOGOUT")}
                onClickFunction={() => handleLogout()}
              />
            </>
          ) : (
            <>
              <NavLink
                to={pathConstants.Login}
                border="true"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {t("LOGIN")}
              </NavLink>
              <NavLink
                to={pathConstants.Register}
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
          <LanguageSwitcher />
          <Button
            className="LDm"
            label={theme === "light" ? t("DARK") : t("LIGHT")}
            onClickFunction={toggleTheme}
          />
          <MenuIcon onClick={() => setIsOpen(!isOpen)}>
            <BsListUl />
          </MenuIcon>
          <div className="CoLi">
            <div className="CoF">
              {favorites?.length > 0 && (
                <span className="Sf">{favorites.length}</span>
              )}
              <NavLink
                to={pathConstants.Favorites}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {<FiHeart size={16} />}
              </NavLink>
            </div>

            <div className="CoB">
              {buy?.length > 0 && <span className="Sb">{qty}</span>}
              <NavLink
                to={pathConstants.Buy}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {<FaShoppingCart />}
              </NavLink>
            </div>
          </div>
        </CoBut>
        {/*------------------------*/}
      </HeaderContainer>
    </Container>
  );
};
export default Header;
