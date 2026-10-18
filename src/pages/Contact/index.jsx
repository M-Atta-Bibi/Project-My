import { useFormik } from "formik";
import { InputTypes } from "../../constants/enums";
import Header from "../../Componets/Header/Header";
import Footer from "../../Componets/Footer/Footer";
import PageHero from "../../Componets/page-hero";
import { Form } from "react-bootstrap";
import InputProvider from "../../Componets/common/inputs/input-provider";
import Button from "../../Componets/common/Button";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Main } from "./style";

const Contact = () => {
  // States
  const { t } = useTranslation();
  const [submittedValues, setSubmittedValues] = useState(null);
  // Formik
  const Formik = useFormik({
    initialValues: {
      fName: "",
      Email: "",
      Subject: "",
      Message: "",
    },
    onSubmit: (values) => {
      setSubmittedValues(values);
    },
  });

  // Function
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
      fieldLabel: t("Full Name"),
      placeholder: "Full Name",
      ...connectField("fName"),
    },
    {
      type: InputTypes.EMAIL,
      fieldLabel: t("Email Address"),
      placeholder: "you@example.com",
      ...connectField("Email"),
    },
    {
      type: InputTypes.TEXT,
      fieldLabel: t("Subject"),
      placeholder: "Subject",
      ...connectField("Subject"),
    },
    {
      type: InputTypes.TEXT,
      fieldLabel: t("Message"),
      placeholder: "How can we help?",
      ...connectField("Message"),
    },
  ];

  return (
    <>
      <Header />
      <PageHero
        title="Contact Us"
        description="Send a question and our team will get back to you."
      />
      <Main>
        <Form onSubmit={Formik.handleSubmit}>
          <div className="CoInput">
            {Fields?.map((item) => (
              <InputProvider key={item.name} itemObject={item} />
            ))}
            <Button
              className="SubmitB"
              type="submit"
              label={t("Send Message")}
            />
          </div>
        </Form>
      </Main>
      <Footer />
    </>
  );
};
export default Contact;
