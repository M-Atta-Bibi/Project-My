import { Link } from "react-router-dom";
import { C1, Main } from "./style";
import { useEffect, useState } from "react";
import i18next from "i18next";
import { GetProducts } from "../../../services/Products/products.service";
import Grid from "../../Products/ProductCardGrid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaChevronRight } from "react-icons/fa";
import pathConstants from "../../../routes/pathConstants";
import Button from "../../../Componets/common/Button";
import { useTranslation } from "react-i18next";

const Se2 = () => {
  // Hooks
  const { t } = useTranslation();

  // States
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <C1>
      <Main>
        <div className="CoPL">
          <div className="SeL">
            <span>{t("Hot Right Now")}</span>
            <h2>{t("Trending Products")}</h2>
            <p>
              {t(
                "Our most popular tools and solutions, loved by teams around the world.",
              )}
            </p>
          </div>
          <div className="SeR">
            <Link to={pathConstants.Products}>
              {t("View All")} <FaChevronRight />
            </Link>
          </div>
        </div>

        <div className="CoProducts">
          <Swiper
            slidesPerView={3}
            spaceBetween={15}
            modules={[Pagination, Navigation]}
            navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
            pagination={{ clickable: true }}
          >
            {data?.map((item) => (
              <SwiperSlide key={item.id}>
                <Grid Product={item} key={item.id} showDetails={true} />
              </SwiperSlide>
            ))}
          </Swiper>
          <Button className="custom-next" label=">" />
          <Button className="custom-prev" label="<" />
        </div>
      </Main>
    </C1>
  );
};
export default Se2;
