import Footer from "../../Componets/Footer/Footer";
import Header from "../../Componets/Header/Header";
import PageHero from "../../Componets/page-hero";
import { useTranslation } from "react-i18next";
import { Co1, Container } from "./style";

const About = () => {
  // Hooks
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <PageHero title="About Hero Title" description="About Hero Description" />
      <Co1>
        <Container>
          <div className="CoArticale">
            <h2>{t("Our story")}</h2>
            <p>
              {t(
                "DKUST started as a technology studio focused on practical tools. Today we help teams ship analytics, automation, and industrial solutions.",
              )}
            </p>
          </div>
        </Container>
      </Co1>
      <Footer />
    </>
  );
};
export default About;
