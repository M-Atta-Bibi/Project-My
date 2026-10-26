import { useTranslation } from "react-i18next";
import Button from "../../../../Componets/common/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductBuy,
  plusQTY,
  minusQTY,
} from "../../../../store/buy/buySlice";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../../../store/favorites/favoritesSlice";
import { Badge, ButtonSave, ContainerCart, DataProduct, ImgBox } from "./style";
import { FaHeart } from "react-icons/fa";
import Checkbox from "../../../../Componets/common/inputs/checkbox-component/checkbox";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import pathConstants from "../../../../routes/pathConstants";

const ProductDetails = ({ product, Feature, addToCart }) => {
  // ال بروب ال بدي استقبلها من داتا
  const {
    price,
    reviews,
    color,
    badge,
    category,
    description,
    name,
    rating,
    id,
  } = product;

  // Hooks
  const dispatch = useDispatch();
  // States
  const { t, i18n } = useTranslation();
  const navigation = useNavigate();
  const activeLanguage = i18n.language;
  const favorites = useSelector((state) => state.favorite.Favorites);
  const isFavorites = favorites.some((item) => item.id === id);
  const [qty, setQty] = useState(1);

  return (
    <>
      <ContainerCart>
        <ImgBox color={color}>
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
            ⭐⭐⭐⭐⭐ {rating} {t("out of 5-")}
            {reviews}
          </p>
          <p id="third">{description?.[activeLanguage]}</p>
          <div className="Cula">
            <ul id="ula">
              <Feature />
            </ul>
          </div>
          <p id="price">
            ${price} <p>{t("/month")}</p>
          </p>
          <div id="Container-Qty">
            <p id="Text-Qty">{t("Qty")}</p>
            <Button
              onClickFunction={() => {
                qty > 1 ? setQty((q) => q - 1) : setQty(1);
              }}
              label="-"
              id="minus"
            />
            <p id="reslute">{qty}</p>
            <Button
              onClickFunction={() => setQty((q) => q + 1)}
              label="+"
              id="plus"
            />
          </div>
          <div id="Container-Button">
            <Button
              onClickFunction={addToCart}
              label={t("Add to Cart")}
              id="ATC"
            />

            <ButtonSave
              active={isFavorites}
              onClick={() => {
                !isFavorites
                  ? dispatch(addToFavorites(product))
                  : dispatch(removeFromFavorites(product));
              }}
            >
              <FaHeart /> {isFavorites ? t("saved") : t("save")}
            </ButtonSave>

            <Button
              onClickFunction={() => {
                navigation(pathConstants.Buy);
                dispatch(addProductBuy({ ...product, qty: qty }));
              }}
              label={t("Buy Now")}
              id="BN"
            />
          </div>
        </DataProduct>
      </ContainerCart>
    </>
  );
};
export default ProductDetails;
