import * as Yup from "yup";
export const SchemaContact = (t) =>
  Yup.object({
    fName: Yup.string().trim().required(t("First name is required.")),
    Email: Yup.string()
      .trim()
      .required(t("Email is required."))
      .email(t("Please enter a valid email address.")),
    Subject: Yup.string().trim().required(t("Subject is required.")),
    Message: Yup.string().trim().required(t("Message is required.")),
  });
