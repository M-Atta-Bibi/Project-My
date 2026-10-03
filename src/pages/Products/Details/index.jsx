import { FiCheckCircle } from "react-icons/fi";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import {
  ContainerDetails,
  ContainerDetailsPage,
  ContainerGrid,
  Main,
} from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import ProductDetails from "./Product-Details";

import { ProductsArray } from "../../../Data/ProductsArray";
import { ProductsArrayAR } from "../../../Data/ProductsArrayAR";
import Grid from "../ProductCardGrid";
import Footer from "../../../Componets/Footer/Footer";
import Header from "../../../Componets/Header/Header";
import { useTranslation } from "react-i18next";
import {
  GetProducts,
  GetProductsById,
} from "../../../services/Products/products.service";
import i18next from "i18next";

const DetailsPage = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [allData, setAllData] = useState([]);
  const { t, i18n } = useTranslation();
  const activeLanguage = i18n.language;
  const { id } = useParams();
  const ArrayUsed = () => {
    if (i18n?.language === "ar") {
      return ProductsArrayAR;
    } else {
      return ProductsArray;
    }
  };
  const productArray = ArrayUsed();

  const getData = async () => {
    setLoading(true);
    const response = await GetProductsById(id);
    console.log(response);
    if (response?.status === 200) {
      setData(response?.data);
    }
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, [id]);

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
  //--------------------------------------------------------
  const [Quentity, setQuentity] = useState(1);
  //--------------------------------------------------------

  const CounterQty = (Action) => {
    if (Action === "increase") {
      setQuentity(Quentity + 1);
    } else if (Action === "decrease" && Quentity > 1) {
      setQuentity(Quentity - 1);
    }
  };
  //--------------------------------------------------------

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

  const RelatedProducts = allData
    ?.filter((item) => item.id !== data?.id)
    .slice(0, 3);
  return (
    <>
      <Header />
      <Main>
        <div className="CoLoc">
          <div className="containerLocation">
            <p className="H">{t("Home")}</p>
            <p className="N">/</p>
            <p className="H">{t("Products")} </p>
            <p className="N">/</p>
            <p className="N">{data?.name?.[activeLanguage]}</p>
          </div>
        </div>
        <ContainerDetailsPage>
          <div id="back">
            <p className="a">
              <Link to="/products">{t("← Back to Products")} </Link>
            </p>
            <ContainerDetails>
              <ProductDetails
                product={data}
                Feature={Feature}
                Quentity={Quentity}
                CounterQty={CounterQty}
              />
            </ContainerDetails>
            <div className="R-Text">
              <h3>{t("Related Products")}</h3>
            </div>
            {/*--------------------------- */}
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              breakpoints={{ 768: { slidesPerView: 3 } }}
              modules={[Navigation]}
              navigation
            >
              {/*--------------------------- */}

              {RelatedProducts?.map((item) => (
                <SwiperSlide key={item.id}>
                  <Grid Product={item} showDetails={false} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </ContainerDetailsPage>
      </Main>
      <Footer />
    </>
  );
};
export default DetailsPage;
