import { useTranslation } from "react-i18next";
import Button from "../../../../Componets/common/Button";
import { Badge, ContainerCart, DataProduct, ImgBox } from "./style";
import {
  addProductBuy,
  plusQTY,
  minusQTY,
} from "../../../../store/buy/buySlice";
import { useDispatch } from "react-redux";
const ProductDetails = ({
  product,
  Feature,
  Quentity,
  CounterQty,
  addToCart,
}) => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const activeLanguage = i18n.language;
  const { price, reviews, color, badge, category, description, name, rating } =
    product;
  return (
    <>
      <ContainerCart>
        <ImgBox color={color?.[activeLanguage]}>
          {/*------------------------للمربع الابيض--------------------- */}
          <svg
            width="54"
            height="54"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
            <line x1="12" y1="22.08" x2="12" y2="12" />
          </svg>
          {/*---------------------------------------------------------- */}
          {badge?.[activeLanguage] && <Badge> {badge?.[activeLanguage]}</Badge>}
        </ImgBox>
        <DataProduct>
          <span id="first"> {category?.[activeLanguage]} </span>
          <h2>{name?.[activeLanguage]}</h2>
          <p id="second">
            ⭐⭐⭐⭐⭐ {rating} out of 5-{reviews}
          </p>
          <p id="third">{description?.[activeLanguage]}</p>
          <div className="Cula">
            <ul id="ula">
              <Feature />
            </ul>
          </div>
          <p id="price">
            ${price} <p>/month</p>
          </p>
          <div id="Container-Qty">
            <p id="Text-Qty">{t("Qty")}</p>
            <Button
              onClickFunction={() => dispatch(minusQTY(product))}
              label="-"
              id="minus"
            />
            <p id="reslute">{Quentity}</p>
            <Button
              onClickFunction={() => dispatch(plusQTY(product))}
              label="+"
              id="plus"
            />
          </div>
          <div id="Container-Button">
            <Button onClickFunction={addToCart} label="Add to Cart" id="ATC" />
            <Button
              onClickFunction={() => dispatch(addProductBuy(product))}
              label="Buy Now"
              id="BN"
            />
          </div>
        </DataProduct>
      </ContainerCart>
    </>
  );
};
export default ProductDetails;
