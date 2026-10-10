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
import Button from "../../Componets/common/Button";
import { FaShoppingBag } from "react-icons/fa";

const Buy = () => {
  const navigate = useNavigate();
  const productsBuy = useSelector((states) => states.buy.productBuy);
  const subTotal = productsBuy.reduce(
    (sum, item) => sum + item.price * item.qty,
    0,
  );
  const tax = Number((subTotal * 0.08).toFixed(2));
  const total = subTotal + tax;
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <PageHero title="Your Cart" description="Your cart is empty" />
      <Main>
        {productsBuy?.length > 0 && (
          <div className="Co1">
            <div className="CoProduct">
              {productsBuy?.map((item) => (
                <List
                  Product={item}
                  showBuy={true}
                  showList={false}
                  key={item.id}
                />
              ))}
              <p className="CoLink">
                <Link to={pathConstants.Products}>
                  {t("← Continue Shopping")}
                </Link>
              </p>
            </div>
            <div className="CoOrder">
              <h3>Order Summary</h3>
              <div className="CoHe">
                {productsBuy?.map((item) => (
                  <div key={item.id} className="CoBo">
                    <p>x{item.qty}</p> ${item.price * item.qty}
                  </div>
                ))}
                <div className="CoBo">
                  <p>Subtotal</p> ${subTotal}
                </div>
                <div className="CoBo">
                  <p>tax (8%)</p> ${tax}
                </div>
                <div className="CoTo">
                  <span>Total</span> ${total}
                </div>
                <div className="CoButton">
                  <Button label="Proceed to Checkout" />
                </div>
                <p>Secure checkout</p>
              </div>
            </div>
          </div>
        )}

        {productsBuy?.length === 0 && (
          <div className="Co2">
            <FaShoppingBag />
            <p>Your cart is empty</p>
            <Button
              label="Browse Products"
              onClickFunction={() => navigate(pathConstants.Products)}
            />
          </div>
        )}
      </Main>
      <Footer />
    </>
  );
};
export default Buy;
