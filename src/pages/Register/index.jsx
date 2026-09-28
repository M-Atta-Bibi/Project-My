import Button from "../../Componets/common/Button";
import InputComponent from "../../Componets/common/inputs/input-component/InputComponent";
import { useState } from "react";
import { useFormik } from "formik";
import { InputTypes } from "../../constants/enums";
import InputProvider from "../../Componets/common/inputs/input-provider";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SchemaAll } from "../../schema/schema";
import { Card, Main, Title } from "./style";
import Footer from "../../Componets/Footer/Footer";
import Header from "../../Componets/Header/Header";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Register = () => {
  const { t } = useTranslation();
  //متحول لحفظ قيمة onSubmit
  const [submittedValues, setSubmittedValues] = useState(null);
  //------------------------------
  const Formik = useFormik({
    initialValues: {
      fName: "",
      lName: "",
      Email: "",
      Password: "",
      ConfirmPassword: "",
      IsAgree: false,
    },
    validationSchema: SchemaAll(t),
    onSubmit: (values) => {
      setSubmittedValues(values);
    },
  });
  //مساعدة لمنع تكرار الاشياء المربوطة ب اسم
  const connectField = (name) => ({
    name,
    fieldValue: Formik.values[name],
    onChangeFunction: (value) => {
      Formik.setFieldValue(name, value);
    },
    onBlurFunction: () => {
      Formik.setFieldTouched(name, true);
    },
    errorMessage: Formik.touched[name] && Formik.errors[name],
  });
  //استدعاء الحقول
  const Fields = [
    {
      type: InputTypes.TEXT,
      fieldLabel: t("First Name"),
      placeholder: "John",
      ...connectField("fName"),
    },
    {
      type: InputTypes.TEXT,
      fieldLabel: t("Last Name"),
      placeholder: "Doe",
      ...connectField("lName"),
    },
    {
      type: InputTypes.EMAIL,
      fieldLabel: t("Email Address"),
      placeholder: "you@example.com",
      ...connectField("Email"),
    },
    {
      type: InputTypes.PASSWORD,
      fieldLabel: t("Password"),
      placeholder: t("Min. 6 characters"),
      ...connectField("Password"),
    },
    {
      type: InputTypes.PASSWORD,
      fieldLabel: t("Confirm Password"),
      placeholder: t("Repeat Your Password"),
      ...connectField("ConfirmPassword"),
    },
    {
      type: InputTypes.CHECKBOX,
      fieldLabel: (
        <>
          {t("I agree to the")} <a href="#"> {t("Terms of Service")}</a>
          {t("and")}
          <a href="#">{t("Privacy Policy")}</a>
        </>
      ),
      ...connectField("IsAgree"),
    },
  ];
  return (
    <div className="container">
      <Header />
      {/*---------------------------------------------------------- */}
      <Main>
        <Card>
          <h2 className="h2-Text">{t("Create Account")} </h2>
          <p className="Join-text">{t("Join DKUST today _ its free")} </p>

          <Form onSubmit={Formik.handleSubmit}>
            <div className="fields-container">
              {Fields?.map((item) => (
                <InputProvider key={item.name} itemObject={item} />
              ))}
              <Button
                className="SubmitB"
                type="submit"
                label={t("CREATE ACCOUNT")}
              />
            </div>
          </Form>
          <p className="Or-text">{t("or sign up with")} </p>
          <div className="CSB">
            <Button
              className="S"
              type="submit"
              label="Google"
              icon={<FcGoogle size={15} />}
            />
            <Button
              className="S"
              type="submit"
              label="Facebook"
              icon={<FaFacebook size={15} color="blue" />}
            />
          </div>
          <p className="T-already">
            {t("Already have an account?")}
            <Link to="/Register"> {t("Sign in")}</Link>
          </p>
        </Card>

        <Link className="Text-Back" to="/Home">
          {t("Back to Home")}
        </Link>
      </Main>
      {/*---------------------------------------------------------- */}
      <Footer />
    </div>
  );
};
export default Register;
