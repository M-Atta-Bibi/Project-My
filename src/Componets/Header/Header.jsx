import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  HeaderContainer,
  Logo,
  MenuIcon,
  NavWrapper,
} from "./style";
import { useState } from "react";
import { BsListUl } from "react-icons/bs";
import Button from "../common/Button";
import { useTheme } from "../../context/theme/useTheme";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/auth/authSlice";
import LanguageSwitcher from "../language-switcher";
import { useTranslation } from "react-i18next";
import { getAccessToken, clearAccessToken } from "../../services/auth.storage";
import pathConstants from "../../routes/pathConstants";
import { FiShoppingBag } from "react-icons/fi";
const Header = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme("");
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = !!getAccessToken();
  const handleLogout = () => {
    clearAccessToken();
    navigate(pathConstants.Login);
  };
  return (
    <Container>
      <HeaderContainer>
        <Logo>
          <h2>DKUST</h2>
          <Button
            className="LDm"
            label={theme === "light" ? t("DARK") : t("LIGHT")}
            onClickFunction={toggleTheme}
          />
          <LanguageSwitcher />
          <Button
            className="LDm"
            label={<FiShoppingBag />}
            onClickFunction={() => navigate("/Favorites")}
          />
        </Logo>
        <MenuIcon onClick={() => setIsOpen(!isOpen)}>
          <BsListUl />
        </MenuIcon>
        <NavWrapper $isOpen={isOpen}>
          <Link to="/Home">{t("HOME")} </Link>
          <Link to="/ABOUT">{t("ABOUT")}</Link>
          <Link to="/PORTFOLIO">{t("PORTFOLIO")} </Link>
          <Link to="/products">{t("PRODUCTS")} </Link>
          <Link to="/SERVICES">{t("SERVICES")} </Link>
          <Link to="/BLOG"> {t("BLOG")}</Link>
          <Link to="/RESOURES"> {t("RESOURCES")} </Link>
          <Link to="/Quiz"> {t("QUIZ")}</Link>
          <Link to="/CONTACT"> {t("CONTACT")}</Link>
          {isAuthenticated ? (
            <>
              <Button
                label={t("LOGOUT")}
                onClickFunction={() => handleLogout()}
              />
            </>
          ) : (
            <>
              <Link to="/login" border="true">
                {t("LOGIN")}
              </Link>
              <Link to="/register" border="true">
                {t("REGISTER")}
              </Link>
            </>
          )}
        </NavWrapper>
      </HeaderContainer>
    </Container>
  );
};
export default Header;
