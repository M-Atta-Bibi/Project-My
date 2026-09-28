import { useState } from "react";
import Button from "../../Componets/common/Button";
import Footer from "../../Componets/Footer/Footer";
import Header from "../../Componets/Header/Header";
import QuestionArray from "../../Data/QuestionArray";
import QuestionArrayAR from "../../Data/QuestionArrayAR";
import QuestionCard from "./question-card";
import { useFormik } from "formik";
import { object } from "yup";
import { ContainerQuestion, Introduction, Main } from "./style";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Quiz = () => {
  const { t, i18n } = useTranslation();
  const ArrayUsed = () => {
    if (i18n?.language === "ar") {
      return QuestionArrayAR;
    } else {
      return QuestionArray;
    }
  };
  const quetionArray = ArrayUsed();
  const [score, setScore] = useState(0);
  const [isFinshed, setIsFinshed] = useState(false);
  const classBadge = () => {
    if (score === quetionArray?.length) return "perfect";
    if (score >= quetionArray?.length / 2) return "pass";
    return "fail";
  };
  const classMessage = () => {
    if (score === quetionArray?.length) return "perfectM";
    if (score >= quetionArray?.length / 2) return "passM";
    return "failM";
  };
  const Formik = useFormik({
    initialValues: {
      1: "",
      2: "",
      3: "",
      4: "",
      5: "",
    },
    onSubmit: (values) => {
      const isAllAnswer = Object.values(Formik.values).every(
        (val) => val !== "",
      );
      if (!isAllAnswer) {
        alert(t("please answer all questions before submit."));
        return;
      }
      let calculetedScore = 0;
      quetionArray?.forEach((q) => {
        if (values[q.id] === q.answer) {
          calculetedScore += 1;
        }
        setScore(calculetedScore);
        setIsFinshed(true);
      });
    },
  });
  const TryB = () => {
    setScore(0);
    setIsFinshed(false);
    Formik.resetForm();
  };
  return (
    <>
      <Header />
      {/*----------------------------------------------------------------------------------- */}
      <div>
        <Introduction>
          <h1>{t("Test Your Knowledge")} </h1>
          <p>
            {t(
              "Answer the questions below and click Submit to check your score.",
            )}
          </p>
          {!isFinshed ? (
            <span className="badge-normal">
              {quetionArray?.length} {t("Questions")}
            </span>
          ) : (
            <span className={`badge-${classBadge()}`}>
              {t("score")} : {score} / {quetionArray.length}
            </span>
          )}
        </Introduction>
        <Main>
          <ContainerQuestion>
            <h2>{t("Choose the Correct Answer")} </h2>
            {quetionArray?.map((item) => (
              <QuestionCard
                key={item.id}
                qData={item}
                value={Formik.values[item.id]}
                onChangeFunction={(qId, selectedOption) =>
                  Formik.setFieldValue(`${qId}`, selectedOption)
                }
                answer={item.answer}
                isFinshed={isFinshed}
              />
            ))}
            {/*----------------------------------------------------------------------------------- */}
            {!isFinshed ? (
              <Button
                className="g"
                label={t("SUBMIT QUIZ")}
                type="submit"
                onClickFunction={Formik.handleSubmit}
              />
            ) : (
              <>
                <div className={`${classMessage()}`}>
                  <h3>
                    {score === quetionArray.length
                      ? t("Perfect Score!")
                      : score >= quetionArray.length / 2
                        ? t("Good Effort")
                        : t("Keep Practicing!")}
                  </h3>
                  <p>
                    {t("You answered")} {score} {t("out of")}
                    {quetionArray.length} {t("questions correctly.")}
                  </p>
                </div>
                <div className="containerB">
                  <Button
                    className="g"
                    onClickFunction={TryB}
                    label={t("TRY AGAIN")}
                  />
                  <Button
                    className="b"
                    label={<Link to="/Home">{t("Back to FAQ")}</Link>}
                  />
                </div>
              </>
            )}
            {/*----------------------------------------------------------------------------------- */}
          </ContainerQuestion>
        </Main>
      </div>
      <Footer />
    </>
  );
};
export default Quiz;
