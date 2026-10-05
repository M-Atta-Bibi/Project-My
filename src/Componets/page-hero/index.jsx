import { useTranslation } from "react-i18next";
import { Hero } from "./style";

const PageHero = ({ title, description, children }) => {
  const { t } = useTranslation();

  return (
    <Hero>
      <h1>{t(title)}</h1>
      {description && <p>{t(description)}</p>}
      {children}
    </Hero>
  );
};

export default PageHero;
