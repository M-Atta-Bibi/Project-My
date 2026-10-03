import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { useFormik } from "formik";
import { InputTypes } from "../../constants/enums";
import Button from "../../Componets/common/Button";
import InputProvider from "../../Componets/common/inputs/input-provider";
import { Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { SchemaAll } from "../../schema/schema";
import { Card, Main, Page } from "./style";
import Footer from "../../Componets/Footer/Footer";
import Header from "../../Componets/Header/Header";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { login } from "../../store/auth/authSlice";
import { setAccessToken } from "../../helpers/cookies";
import { useTranslation } from "react-i18next";

function Login() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const Location = useLocation();
  //متحول لحفظ قيمة onSubmit
  const [submittedValues, setSubmittedValues] = useState(null);
  //------------------------------
  const Formik = useFormik({
    initialValues: {
      Email: "",
      Password: "",
      Remember: false,
    },
    onSubmit: (event) => {
      setAccessToken("demo-token");
      const redirectTo = Location?.state?.from?.pathname;
      navigation(redirectTo, { replace: true });
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
      type: InputTypes.EMAIL,
      fieldLabel: t("Email Address"),
      placeholder: t("you@example.com"),
      ...connectField("Email"),
    },
    {
      type: InputTypes.PASSWORD,
      fieldLabel: t("Password"),
      placeholder: t("Enter your Password"),
      ...connectField("Password"),
    },
    {
      type: InputTypes.CHECKBOX,
      fieldLabel: t("Remember me"),
      ...connectField("Remember"),
    },
  ];
  return (
    <>
      <Header />
      {/*---------------------------------BODY------------------------ */}
      <Main>
        <Card>
          <h2 className="h2-Text ">{t("Welcome Back")} </h2>
          <p className="Join-text">{t("Sign in to your DKUST account")} </p>
          <Form onSubmit={Formik.handleSubmit}>
            {Fields?.map((item) => (
              <InputProvider key={item.name} itemObject={item} />
            ))}
            <Button className="SubmitB" type="submit" label={t("SIGN IN")} />
          </Form>
          <p className="Or-text">{t("or continue with")} </p>
          <div className="CSB ">
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
            {t("Dont have an account?")}
            <Link to="/Register">{t("Sign Up")} </Link>
          </p>
        </Card>
        <Link className="Text-Back" to="/Home">
          {t("Back to Home")}
        </Link>
      </Main>
      {/*----------------------------------FOOTER---------------------- */}
      <Footer />
    </>
  );
}
export default Login;
