import InputComponent from "../common/inputs/input-component/InputComponent";
import Button from "../common/Button";
import { useTranslation } from "react-i18next";
import pathConstants from "../../routes/pathConstants";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPaperPlane,
  FaLinkedin,
} from "react-icons/fa";
import {
  Container,
  FooterColumn,
  FooterContainer,
  FooterIcons,
  FooterSaction,
  SubmitButton,
} from "./style";
import { Link } from "react-router-dom";
import { useFormik } from "formik";

const Footer = () => {
  // Hooks
  const { t } = useTranslation();

  // States
  const formik = useFormik({
    initialValues: { Email: "" },
  });

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
                <li>
                  <Link to="tel:12345678900">
                    {t("Phone: +1 234 567 8900")}
                  </Link>{" "}
                </li>
                <li>{t("Email: info@dkust.com")} </li>
              </ul>
            </FooterSaction>

            <FooterSaction>
              <h5>{t("QUICK LINKS")} </h5>
              <ul>
                <li>
                  <Link to={pathConstants.About}>{t("About Us")} </Link>
                </li>
                <li>
                  <Link to={pathConstants.Services}>{t("Services")} </Link>
                </li>
                <li>
                  <Link to={pathConstants}>{t("Portfolio")} </Link>
                </li>
                <li>
                  <Link to={pathConstants.Blog}>{t("Blog")} </Link>
                </li>
                <li>
                  <Link to={pathConstants}>{t("Contact Us")} </Link>
                </li>
              </ul>
            </FooterSaction>

            <FooterSaction>
              <h5>{t("OUR SERVICES")} </h5>
              <ul>
                <li>
                  <Link to={pathConstants}>{t("Web Development")}</Link>
                </li>
                <li>
                  <Link to={pathConstants}>{t("Machine Learning")} </Link>
                </li>
                <li>
                  <Link to={pathConstants}>{t("Robotics")} </Link>
                </li>
                <li>
                  <Link to={pathConstants}>{t("Industrial Consulting")}</Link>
                </li>
                <li>
                  <Link to={pathConstants}>{t("Data Analytics")} </Link>
                </li>
              </ul>
            </FooterSaction>

            <FooterSaction>
              <div>
                <h5>{t("SUBSCRIBE NEWSLETTER")} </h5>
                <p>{t("Get the latest updates and news.")}</p>
              </div>
              <SubmitButton>
                <InputComponent
                  type="email"
                  placeholder={t("Email Address")}
                  fieldValue={formik.values.Email}
                  onChangeFunction={(value) =>
                    formik.setFieldValue("Email", value)
                  }
                />
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
            <Link to="https://facebook.com">
              <FaFacebookF />
            </Link>
            <Link to="https://linkedin.com">
              <FaLinkedin />
            </Link>
            <Link to="https://twitter.com">
              <FaTwitter />
            </Link>
            <Link to="https://instagram.com">
              <FaInstagram />
            </Link>
          </div>
        </FooterIcons>
      </FooterContainer>
    </Container>
  );
};
export default Footer;
