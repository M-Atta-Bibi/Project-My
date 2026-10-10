import { useSelector } from "react-redux";
import Grid from "../Products/ProductCardGrid";
import Footer from "../../Componets/Footer/Footer";
import Header from "../../Componets/Header/Header";
import PageHero from "../../Componets/page-hero";
import { FiHeart } from "react-icons/fi";
import Button from "../../Componets/common/Button";
import { useNavigate } from "react-router-dom";
import pathConstants from "../../routes/pathConstants";
import { Main } from "./style";

const FavoritesPage = () => {
  // States
  const favorites = useSelector((state) => state.favorite.Favorites);
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <PageHero
        title="My Favorites"
        description={
          favorites?.length > 0
            ? `${favorites.length} saved item`
            : "No saved items yet"
        }
      />
      <Main>
        {favorites?.length === 0 && (
          <div className="NoLenght">
            <FiHeart />
            <p>You haven't saved any products yet</p>
            <Button
              label="Explore Products"
              onClickFunction={() => navigate(pathConstants.Products)}
            />
          </div>
        )}
        {favorites?.length > 0 && (
          <div className="Lenght">
            {favorites?.map((item) => (
              <Grid Product={item} key={item.id} />
            ))}
          </div>
        )}
      </Main>
      <Footer />
    </>
  );
};
export default FavoritesPage;
