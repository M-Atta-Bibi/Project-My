import { useEffect, useState } from "react";
import Footer from "../../Componets/Footer/Footer";
import Header from "../../Componets/Header/Header";
import PageHero from "../../Componets/page-hero";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { Co1, Container } from "./style";
import { GetServices } from "../../services/Services/services.service";

const Services = () => {
  // Hooks
  const [i18n, t] = useTranslation();
  const activeLanguage = i18n.language;

  // UI/UX
  const [loading, setLoading] = useState(true);

  // States
  const [data, setData] = useState([]);

  //Functions

  //     مشان نجيب ال داتا من API
  const GetData = async () => {
    setLoading(true);
    const response = await GetServices();
    if (response?.status === 200) {
      setData(response?.data);
    } else {
      setData([]);
    }
    setLoading(false);
  };
  useEffect(() => {
    GetData();
  }, [i18next.language]);

  return (
    <>
      <Header />
      <PageHero
        title="Our Services"
        description="From web platforms to machine learning and robotics, we deliver end-to-end solutions."
      />
      <Co1>
        <Container>
          {data?.map((item) => (
            <div className="CoArticale" key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </Container>
      </Co1>
      <Footer />
    </>
  );
};
export default Services;
