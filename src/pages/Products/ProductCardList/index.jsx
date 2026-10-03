import { useTranslation } from "react-i18next";
import {
  Action,
  Add,
  Badge,
  Category,
  Container,
  Content,
  Description,
  Details,
  FooterRow,
  HeaderRow,
  ImgBox,
  LinkDetails,
  Price,
  RatingRow,
  RiviewsCount,
  Title,
} from "./styles";
import { Link } from "react-router-dom";
import Checkbox from "../../../Componets/common/inputs/checkbox-component/checkbox";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../../store/favorites/favoritesSlice";
import { FaHeart } from "react-icons/fa";

const List = ({ Product, onAddToCart }) => {
  const {
    id,
    price,
    reviews,
    color,
    badge,
    category,
    description,
    name,
    rating,
  } = Product;
  const { t, i18n } = useTranslation();
  const activeLanguage = i18n.language;
  const favorites = useSelector((state) => state.favorite.Favorites);
  const dispatch = useDispatch();
  const isFavorites = favorites.some((item) => item.id === id);
  return (
    <LinkDetails to={`/Products/${id}`}>
      <Container>
        <ImgBox color={color}>
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
        </ImgBox>
        <Content>
          <HeaderRow>
            {badge?.[activeLanguage] && (
              <Badge>{badge?.[activeLanguage]}</Badge>
            )}
            <Price>
              <span onClick={(e) => e.stopPropagation()}>
                <Checkbox
                  id={id}
                  fieldLabel={
                    <FaHeart color={isFavorites ? "red" : "#cbcbcb"} />
                  }
                  name="favorites"
                  fieldValue={isFavorites}
                  onChangeFunction={(checked) => {
                    checked
                      ? dispatch(addToFavorites(Product))
                      : dispatch(removeFromFavorites(Product));
                  }}
                />
              </span>
              <div className="CoP">
                ${price}
                <p>/mo</p>
              </div>
            </Price>
          </HeaderRow>
          <Title> {name?.[activeLanguage]}</Title>
          <Category>{category?.[activeLanguage]}</Category>
          <Description>{description?.[activeLanguage]}</Description>
          <FooterRow>
            <RatingRow>
              ⭐⭐⭐⭐⭐ {rating?.[activeLanguage]}({reviews} reviews)
            </RatingRow>
            <Action>
              <Details>{t("View Details")}</Details>
              <Add
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onAddToCart(Product);
                }}
              >
                🛒{t("Add to Cart")}
              </Add>
            </Action>
          </FooterRow>
        </Content>
      </Container>
    </LinkDetails>
  );
};
export default List;
