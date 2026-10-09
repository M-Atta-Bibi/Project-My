import { useSelector } from "react-redux";
import Footer from "../../Componets/Footer/Footer";
import Header from "../../Componets/Header/Header";
import PageHero from "../../Componets/page-hero";
import List from "../Products/ProductCardList";
import { useState } from "react";
import { Main } from "./style";
import { Link, useNavigate } from "react-router-dom";
import pathConstants from "../../routes/pathConstants";
import { useTranslation } from "react-i18next";
import { FaShoppingBag } from "react-icons/fa";
import Button from "../../Componets/common/Button";

const Buy = () => {
  const productsBuy = useSelector((states) => states.buy.productBuy);
  const [Quentity, setQuentity] = useState(1);
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <PageHero title="Your Cart" description="Your cart is empty" />
      <Main>
        <div className="Co1">
          <div className="CoProduct">
            {productsBuy?.map((item) => (
              <List
                Product={item}
                showBuy={true}
                showList={false}
                Quentity={Quentity}
              />
            ))}
            <p className="CoLink">
              <Link to={pathConstants.Products}>
                {t("← Continue Shopping")}
              </Link>
            </p>
          </div>
          <div className="CoOrder">
            <p>
              <h1>Alooooooooooooo</h1>
            </p>
          </div>
        </div>

        {/* <div className="Co2">
          <FaShoppingBag />
          <p>Your cart is empty</p>
          <Button
            label="Browse Products"
            onClickFunction={() => navigate(pathConstants.Products)}
          />
        </div>*/}
      </Main>
      <Footer />
    </>
  );
};
export default Buy;
