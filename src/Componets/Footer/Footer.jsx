import {
  FaFacebookF,
  FaGoogle,
  FaTwitter,
  FaInstagram,
  FaPaperPlane,
} from "react-icons/fa";

import {
  Container,
  FooterColumn,
  FooterContainer,
  FooterIcons,
  FooterSaction,
  SubmitButton,
} from "./style";
import InputComponent from "../common/inputs/input-component/InputComponent";
import Button from "../common/Button";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <FooterContainer>
        <FooterColumn>
          <div className="A">
            <FooterSaction>
              <h5>{t("CONTACT DETAIL")} </h5>
              <ul>
                <li>{t("123 Business Street, Suite 100,")} </li>
                <li>{t("New York, NY 10001")} </li>
                <li>{t("Phone: +1 234 567 8900")} </li>
                <li>{t("Email: info@dkust.com")} </li>
              </ul>
            </FooterSaction>

            <FooterSaction>
              <h5>{t("QUICK LINKS")} </h5>
              <ul>
                <li>
                  <a href="#">{t("About Us")} </a>
                </li>
                <li>
                  <a href="#">{t("Services")} </a>
                </li>
                <li>
                  <a href="#">{t("Portfolio")} </a>
                </li>
                <li>
                  <a href="#">{t("Blog")} </a>
                </li>
                <li>
                  <a href="#">{t("Contact Us")} </a>
                </li>
              </ul>
            </FooterSaction>

            <FooterSaction>
              <h5>{t("OUR SERVICES")} </h5>
              <ul>
                <li>
                  <a href="#">{t("Web Development")}</a>
                </li>
                <li>
                  <a href="#">{t("Machine Learning")} </a>
                </li>
                <li>
                  <a href="#">{t("Robotics")} </a>
                </li>
                <li>
                  <a href="#">{t("Industrial Consulting")}</a>
                </li>
                <li>
                  <a href="#">{t("Data Analytics")} </a>
                </li>
              </ul>
            </FooterSaction>

            <FooterSaction>
              <div>
                <h5>{t("SUBSCRIBE NEWSLETTER")} </h5>
                <p>{t("Get the latest updates and news.")}</p>
              </div>
              <SubmitButton>
                <InputComponent type="email" placeholder={t("Email Address")} />
                <Button
                  type="submit"
                  label={<FaPaperPlane style={{ color: "white" }} />}
                />
              </SubmitButton>
            </FooterSaction>
          </div>
        </FooterColumn>
        <FooterIcons>
          <p>{t("Copyright © DKUST | All Rights Reserved")}</p>
          <div>
            <FaFacebookF />
            <FaGoogle />
            <FaTwitter />
            <FaInstagram />
          </div>
        </FooterIcons>
      </FooterContainer>
    </Container>
  );
};
export default Footer;
