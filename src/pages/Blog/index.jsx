import { useEffect, useState } from "react";
import Footer from "../../Componets/Footer/Footer";
import Header from "../../Componets/Header/Header";
import PageHero from "../../Componets/page-hero";
import { useTranslation } from "react-i18next";
import { GetBlog } from "../../services/Blog/blog.service";
import i18next from "i18next";
import { Co1, Container } from "./style";

const Blog = () => {
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
    const response = await GetBlog();
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
        title="DKUST Blog"
        description="Updates, product notes, and engineering stories from the team."
      />
      <Co1>
        <Container>
          {data?.map((item) => (
            <div className="CoArticale" key={item.id}>
              <small>{item.date}</small>
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
export default Blog;
