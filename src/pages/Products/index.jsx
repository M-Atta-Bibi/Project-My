import { BsListUl } from "react-icons/bs";
import { FiGrid } from "react-icons/fi";
import Grid from "../../Componets/product-card/Grid-card";
import List from "../../Componets/product-card/List-card";
import { useEffect, useMemo, useState } from "react";
import Footer from "../../Componets/Footer/Footer";
import Header from "../../Componets/Header/Header";
import { useTranslation } from "react-i18next";
import { GetProducts } from "../../services/Products/products.service";
import i18next from "i18next";
import PageHero from "../../Componets/page-hero";
import {
  Buttons,
  Main,
  DisplayMode,
  FilterBar,
  FilterProduct,
  ProductsSeaction,
  ResultHeader,
} from "./styles";
import { useSearchParams } from "react-router-dom";

const Products = () => {
  // Hooks
  const { t, i18n } = useTranslation();
  const activeLanguage = i18n.language;
  const [searchParams, setSearchParams] = useSearchParams();

  //  UI/UX
  const [loading, setLoading] = useState(true);

  // States
  const category = searchParams.get("category") || "All";
  const [data, setData] = useState([]);
  const [ViewMode, setViewMode] = useState("grid");
  const [SelectedCategory, setSelectedCategory] = useState("All");
  const [sort, setSort] = useState("default");
  const [Quentity, setQuentity] = useState(1);
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
    return data
      ?.filter(
        (item) =>
          category === "All" || item.category?.[activeLanguage] === category,
      )
      ?.sort((first, second) => {
        if (sort === "price-asc") return first.price - second.price;
        if (sort === "price-desc") return second.price - first.price;
        if (sort === "rating") return second.rating - first.rating;
        return 0;
      });
  }, [category, activeLanguage, sort, data]);

  //    مشان نعرضها ب كونسل
  const addToCart = (Product) => {
    console.log(Product);
  };

  //------------------
  const SearchU = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === "All") {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    setSearchParams(newParams);
  };

  return (
    <>
      <Header />
      <Main>
        {/*------------------------------------Section Hero---------------------------------*/}
        <PageHero
          title={t("Our Products")}
          description={t(
            "Explore our range of software,Ai tools,hardware Kits,and roboticssolutions built for modern teams.",
          )}
        />
        {/*-------------------------لتنسيق الازرار و تغير قيمتها ----------------------*/}
        <FilterBar>
          <div className="ContainerBar">
            <FilterProduct>
              {Categories?.map((Category) => (
                <Buttons
                  border={true}
                  active={category === Category}
                  onClick={() => SearchU("category", Category)}
                >
                  {Category}
                </Buttons>
              ))}
            </FilterProduct>
            <div className="Controls-wrapper">
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value)}
              >
                <option value="default">{t("Sort: Default")}</option>
                <option value="price-asc">{t("Sort: Price Asc")}</option>
                <option value="price-desc">{t("Sort: Price Desc")}</option>
                <option value="rating">{t("Sort: Rating")}</option>
              </select>
              <div className="Filter-section">
                <Buttons
                  active={ViewMode === "grid"}
                  onClick={() => setViewMode("grid")}
                >
                  <FiGrid fontSize={16} />
                </Buttons>
                <Buttons
                  active={ViewMode === "list"}
                  onClick={() => setViewMode("list")}
                >
                  <BsListUl fontSize={16} />
                </Buttons>
              </div>
            </div>
          </div>
        </FilterBar>
        {/*-------------------------قسم العرض--------------------------*/}
        <ProductsSeaction>
          <div className="ContainerPage">
            <ResultHeader>
              {FilterProducts.length}
              {t("products found")}
            </ResultHeader>
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
                  <List
                    Product={item}
                    key={item.id}
                    onAddToCart={addToCart}
                    Quentity={Quentity}
                  />
                ),
              )}
            </DisplayMode>
          </div>
        </ProductsSeaction>
      </Main>
      <Footer />
    </>
  );
};
export default Products;
