import environment from "../../environment";
import { GET, getLang } from "../http.service";
export const GetBlog = async () => {
  const lang = getLang();
  const response = await GET(`${environment.posts}?lang=${lang}`);
  return response;
};
