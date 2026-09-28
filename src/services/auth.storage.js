import Cookies from "js-cookie";
import environment from "../environment";

export const getAccessToken = () => Cookies.get(environment.TOKEN_KEY);

export const setAccessToken = (token) => {
  Cookies.set(environment.TOKEN_KEY, token);
};

export const clearAccessToken = () => {
  Cookies.remove(environment.TOKEN_KEY);
};
