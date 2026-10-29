import { FiCheckCircle } from "react-icons/fi";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import ProductDetails from "../../Componets/product-card/Details-card";
import Grid from "../../Componets/product-card/Grid-card";
import Footer from "../../Componets/Footer/Footer";
import Header from "../../Componets/Header/Header";
import { useTranslation } from "react-i18next";
import {
  GetProducts,
  GetProductsById,
} from "../../services/Products/products.service";
import i18next from "i18next";
import { DetailsProduct, Main } from "./style";

const DetailsPage = () => {
  // Hoks
  const { t, i18n } = useTranslation();
  const activeLanguage = i18n.language;
  const { id } = useParams();

  //  UI/UX
  const [loading, setLoading] = useState(true);

  // States
  const [allData, setAllData] = useState([]);
  const [data, setData] = useState({});
  const [Quentity, setQuentity] = useState(1);

  // Function
  //     مشان نجيب ال داتا من API
  const getAllData = async () => {
    setLoading(true);
    const response = await GetProducts();
    if (response?.status === 200) {
      setAllData(response?.data);
    } else {
      setAllData([]);
    }
    setLoading(false);
  };
  useEffect(() => {
    getAllData();
  }, [i18next.language]);

  //   مشان نجيب ال داتا بواسطة المعرف الخاص ب منتج من API
  const getData = async () => {
    setLoading(true);
    const response = await GetProductsById(id);
    if (response?.status === 200) {
      setData(response?.data);
    }
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, [id]);

  //  مشان الزيادة و النقصان للكمية
  const CounterQty = (Action) => {
    if (Action === "increase") {
      setQuentity(Quentity + 1);
    } else if (Action === "decrease" && Quentity > 1) {
      setQuentity(Quentity - 1);
    }
  };

  // خاص ب صفحة المنتج ل عرض ال FEATURES
  const Feature = () => {
    return (
      <>
        {data?.features?.[activeLanguage].map((item, index) => (
          <li key={index} className="m-0">
            <FiCheckCircle color="#22c55e" size={20} /> {item}
          </li>
        ))}
      </>
    );
  };

  // مشان نطبع 3 مصفوفات المختلفة عن ID
  const RelatedProducts = allData
    ?.filter((item) => item.id !== data?.id)
    .slice(0, 3);

  return (
    <>
      <Header />
      <Main>
        {/*-------------------مسار المنتج---------------------*/}
        <div className="product-path-section">
          <div className="breadcrumb-nav">
            <p className="breadcrumb-item">{t("Home")}</p>
            <p className="breadcrumb-item-active">/</p>
            <p className="breadcrumb-item">{t("Products")} </p>
            <p className="breadcrumb-item-active">/</p>
            <p className="breadcrumb-item-active">
              {data?.name?.[activeLanguage]}
            </p>
          </div>
        </div>
        {/*-----------------------قسم العرض-------------------*/}
        <DetailsPage>
          <div className="Container">
            <p className="back-navigation">
              <Link to="/products">{t("← Back to Products")}</Link>
            </p>
            {/*--------------------لعرض المصفوفة الخاصة ب منتج--------------------------*/}
            <DetailsProduct>
              <ProductDetails
                product={data}
                Feature={Feature}
                Quentity={Quentity}
                CounterQty={CounterQty}
              />
            </DetailsProduct>
            {/*--------------------------- */}
            <div className="Related-title">
              <h3>{t("Related Products")}</h3>
            </div>
            {/*-------------تطبيق ال SWIPER-------------- */}
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              breakpoints={{ 768: { slidesPerView: 3 } }}
              modules={[Navigation]}
              navigation
            >
              {RelatedProducts?.map((item) => (
                <SwiperSlide key={item.id}>
                  <Grid Product={item} showDetails={false} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </DetailsPage>
      </Main>
      <Footer />
    </>
  );
};
export default DetailsPage;
