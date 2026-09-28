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
const List = ({ Product, onAddToCart }) => {
  const { t, i18n } = useTranslation();
  return (
    <LinkDetails to={`/Products/${Product.id}`}>
      <Container>
        <ImgBox color={Product.color}>
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
            {Product.badge && <Badge>{Product.badge}</Badge>}
            <Price>
              ${Product.price}
              <span>/mo </span>
            </Price>
          </HeaderRow>
          <Title> {Product.name}</Title>
          <Category>{Product.category}</Category>
          <Description>{Product.description}</Description>
          <FooterRow>
            <RatingRow>
              ⭐⭐⭐⭐⭐ {Product.rating}({Product.reviewsCount} reviews)
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
