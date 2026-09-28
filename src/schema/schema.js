import * as Yup from "yup";
export const SchemaAll = (t) =>
  Yup.object({
    fName: Yup.string().trim().required(t("First name is required.")),
    lName: Yup.string().trim().required(t("Last name is required.")),
    Email: Yup.string()
      .trim()
      .required(t("Email is required."))
      .email(t("Please enter a valid email address.")),
    Password: Yup.string().trim().required(t("Password is required.")),
    ConfirmPassword: Yup.string()
      .trim()
      .required(t("Please confirm your password."))
      .oneOf(
        [Yup.ref("Pasword")],
        t("Password and confirm password must match."),
      ),
    IsAgree: Yup.boolean().oneOf(
      [true],
      t("You must agree to the terms before continuing."),
    ),
    Remember: Yup.boolean().oneOf(
      [true],
      t("You must Remember to the terms before continuing."),
    ),
  });
