import { BsGridFill, BsListUl } from "react-icons/bs";
import Grid from "./ProductCardGrid";
import List from "./ProductCardList";
import { useEffect, useMemo, useState } from "react";
import Footer from "../../Componets/Footer/Footer";
import Header from "../../Componets/Header/Header";
import { useTranslation } from "react-i18next";
import { GetProducts } from "../../services/Products/products.service";
import i18next from "i18next";
import {
  Buttons,
  Container,
  ContainerAll,
  ContainerButton,
  ContainerButtonFilter,
  ContainerText,
  DisplayMode,
  NumberArray,
} from "./styles";

const Products = () => {
  // Hooks
  const { t, i18n } = useTranslation();
  const activeLanguage = i18n.language;

  //  UI/UX
  const [loading, setLoading] = useState(true);

  // States
  const [data, setData] = useState([]);
  const [ViewMode, setViewMode] = useState("grid");
  const [SelectedCategory, setSelectedCategory] = useState("All");
  const Categories = [
    t("All"),
    t("Software"),
    t("AI"),
    t("Hardware"),
    t("Robotics"),
    t("Security"),
  ];

  // Function

  //     مشان نجيب ال داتا من API
  const GetData = async () => {
    setLoading(true);
    const response = await GetProducts();
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

  //     مشان ال فلترة و لعدم تكريرها اكثر من مرة
  const FilterProducts = useMemo(() => {
    return data?.filter(
      (item) =>
        SelectedCategory === "All" ||
        item.category?.[activeLanguage] === SelectedCategory,
    );
  }, [SelectedCategory, activeLanguage, data]);

  //    مشان نعرضها ب كونسل
  const addToCart = (Product) => {
    console.log(Product);
  };
  return (
    <>
      <Header />
      <ContainerAll>
        {/*------------------------------------Section Hero---------------------------------*/}
        <ContainerText>
          <div>
            <h1>{t("Our Products")} </h1>
            <p>
              {t(
                "Explore our range of software,Ai tools,hardware Kits,and roboticssolutions built for modern teams.",
              )}
            </p>
          </div>
        </ContainerText>
        {/*-------------------------لتنسيق الازرار و تغير قيمتها ----------------------*/}
        <ContainerButton>
          <div className="mar">
            <ContainerButtonFilter>
              {Categories?.map((Category) => (
                <Buttons
                  active={SelectedCategory === Category}
                  onClick={() => setSelectedCategory(Category)}
                >
                  {Category}
                </Buttons>
              ))}
            </ContainerButtonFilter>
            <div>
              <Buttons
                active={ViewMode === "grid"}
                onClick={() => setViewMode("grid")}
              >
                <BsGridFill />
              </Buttons>
              <Buttons
                active={ViewMode === "list"}
                onClick={() => setViewMode("list")}
              >
                <BsListUl />
              </Buttons>
            </div>
          </div>
        </ContainerButton>
        {/*-------------------------قسم العرض--------------------------*/}
        <Container>
          <div className="pad">
            <NumberArray>
              {FilterProducts.length}
              {t("products found")}
            </NumberArray>
            {/*--------------------لعرض المصفوفة الخاصة ب منتجات--------------------------*/}
            <DisplayMode ViewMode={ViewMode}>
              {FilterProducts?.map((item) =>
                ViewMode === "grid" ? (
                  <Grid
                    Product={item}
                    key={item.id}
                    onAddToCart={addToCart}
                    showDetails={true}
                  />
                ) : (
                  <List Product={item} key={item.id} onAddToCart={addToCart} />
                ),
              )}
            </DisplayMode>
          </div>
        </Container>
      </ContainerAll>
      <Footer />
    </>
  );
};
export default Products;
