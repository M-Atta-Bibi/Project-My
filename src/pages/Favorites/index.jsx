import { useSelector } from "react-redux";
import Grid from "../Products/ProductCardGrid";

const FavoritesPage = () => {
  const favorites = useSelector((state) => state.favorite.Favorites);
  if (favorites.length === 0) return <h2>لا يوجد عناصر مفضلة</h2>;
  else
    return (
      <div>
        <h2>المفضلة</h2>
        <div>
          {favorites?.map((item) => (
            <Grid Product={item} key={item.id} />
          ))}
        </div>
      </div>
    );
};
export default FavoritesPage;
