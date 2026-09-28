import React from "react";
import { Link } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import { FAQHeader, FAQSection } from "./style";
import Header from "../../Componets/Header/Header";
import Footer from "../../Componets/Footer/Footer";
import Button from "../../Componets/common/Button";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <FAQHeader>
        <h1>{t("Frequently Asked Questions")}</h1>
        <p>
          {t(
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco.",
          )}
        </p>
        <Button label={t("ASK A QUESTION")} className="FAQButton" />
      </FAQHeader>

      <FAQSection>
        <h2> {t("Generally Asked Question")}</h2>
        <p>
          {t(
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco.",
          )}
        </p>

        {/* حاوية الأكورديون من Bootstrap بدون defaultActiveKey */}
        <Accordion className="accordion-container" defaultActiveKey="0">
          <Accordion.Item className="accordion-container-item" eventKey="0">
            <Accordion.Header>
              {t("What services do you offer?")}
            </Accordion.Header>
            <Accordion.Body>
              {t(
                "We offer a wide range of technology services including web development, machine learning solutions, robotics engineering,industrial consulting, and data analytics. Our team of experts is dedicated to delivering high-quality solutions tailored to your business needs.",
              )}
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item className="accordion-container-item" eventKey="1">
            <Accordion.Header>
              {t("How can I contact your team?")}
            </Accordion.Header>
            <Accordion.Body>
              {t(
                "You can reach our team through the contact form on our website, by emailing info@dkust.com, or by calling +1 234 567 8900. Our support team is available Monday through Friday, 9 AM to 6 PM EST.",
              )}
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item className="accordion-container-item" eventKey="2">
            <Accordion.Header>
              {t("Do you provide technical support?")}
            </Accordion.Header>
            <Accordion.Body>
              {t(
                "Yes, we provide comprehensive technical support for all our services. We offer different support tiers including standard email support, priority phone support, and dedicated account management for enterprise clients.",
              )}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <div className="FAQb">
          <p className="pbtn">{t("Ready to test your knowledge?")}</p>
          <Button label={<Link to="/Quiz">{t("TAKE THE QUIZ")}</Link>} />
        </div>
      </FAQSection>

      <Footer />
    </>
  );
}

export default Home;
