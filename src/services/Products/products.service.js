import environment from "../../environment";
import { GET } from "../http.service";

export const GetProducts = async () => {
  const response = await GET(environment.products);
  return response;
};
