import environment from "../../environment";
import { GET, getLang } from "../http.service";
export const GetServices = async () => {
  const lang = getLang();
  const response = await GET(`${environment.services}?lang=${lang}`);
  return response;
};
