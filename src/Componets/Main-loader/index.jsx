import { useTranslation } from "react-i18next";

const MainLoader = () => {
  const { t } = useTranslation();

  return (
    <div className="main-loader" role="status">
      {t("Loading")}
    </div>
  );
};

export default MainLoader;
