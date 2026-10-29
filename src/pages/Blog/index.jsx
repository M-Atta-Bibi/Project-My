import { useEffect, useState } from "react";
import Footer from "../../Componets/Footer/Footer";
import Header from "../../Componets/Header/Header";
import PageHero from "../../Componets/page-hero";
import { GetBlog } from "../../services/Blog/blog.service";
import i18next from "i18next";
import { Co1, Container, ContainerPage, Main } from "./style";

const Blog = () => {
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
      <ContainerPage>
        <Main>
          {data?.map((item) => (
            <div className="CoArticale" key={item.id}>
              <small>{item.date}</small>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </Main>
      </ContainerPage>
      <Footer />
    </>
  );
};
export default Blog;
