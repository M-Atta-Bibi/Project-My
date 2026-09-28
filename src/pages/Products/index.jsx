import { BsGridFill, BsListUl } from "react-icons/bs";

import { ProductsArray } from "../../Data/ProductsArray";
import { ProductsArrayAR } from "../../Data/ProductsArrayAR";
import Grid from "./ProductCardGrid";
import List from "./ProductCardList";
import { useState } from "react";
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
import Footer from "../../Componets/Footer/Footer";
import Header from "../../Componets/Header/Header";
import { useTranslation } from "react-i18next";

const Products = () => {
  const { t, i18n } = useTranslation();
  const ArrayUsed = () => {
    if (i18n?.language === "ar") {
      return ProductsArrayAR;
    } else {
      return ProductsArray;
    }
  };
  const productArray = ArrayUsed();
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
  {
    /*---------------------------مشان نعرضها ب كونسل-------------------------------- */
  }
  const addToCart = (Product) => {
    console.log(Product);
  };
  {
    /*------------------------مشان ال فلترة و لعدم تكريرها اكثر من مرة------------- */
  }
  const FilterProducts =
    SelectedCategory === "All"
      ? productArray
      : productArray?.filter(
          (Product) => Product.category === SelectedCategory,
        );
  return (
    <>
      <Header />
      <ContainerAll>
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
        {/*--------------------------------------------------------------------------------- */}
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
        <Container>
          {/*--------------------لعرض المصفوفة الخاصة ب منتجات--------------------------*/}
          <div className="pad">
            <NumberArray>
              {FilterProducts.length}
              {t("products found")}
            </NumberArray>
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
