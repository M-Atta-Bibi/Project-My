import environment from "../environment";
import { getAccessToken } from "../helpers/cookies";
import { GetLocalStorage } from "../helpers/local-storage";
import { handleERROR } from "./error.service";
import axios from "axios";

export const getLang = () => GetLocalStorage(environment.lang) || "ar";
const getConfig = () => {
  const Token = getAccessToken(environment.TOKEN_KEY);
  const headers = {
    "Content-Type": "application/json",
  };
  if (Token) {
    headers.Authorization = `Bearer ${Token}`;
  }
};
export const GET = async (apiPath) => {
  let res = {};
  await axios
    .get(`${environment.API_URL}/${apiPath}`, getConfig())
    .then((responese) => {
      res.status = responese.status;
      res.data = responese.data;
    })
    .catch((error) => {
      handleERROR(error?.response);
    });
  return res;
};

export const POST = async (apiPath, requestBody) => {
  let res = {};
  await axios
    .post(`${environment.API_URL}/${apiPath}`, requestBody, getConfig())
    .then((response) => {
      res.status = response.status;
      res.data = response.data;
    })
    .catch((error) => {
      handleERROR(error?.response);
    });
  return res;
};

export const PUT = async (apiPath, requestBody) => {
  let res = {};
  await axios
    .put(`${environment.API_URL}/${apiPath}`, requestBody, getConfig())
    .then((response) => {
      res.status = response.status;
      res.data = response.data;
    })
    .catch((error) => {
      handleERROR(error?.response);
    });
  return res;
};

export const PATCH = async (apiPath, requestBody) => {
  let res = {};
  await axios
    .patch(`${environment.API_URL}/${apiPath}`, requestBody, getConfig())
    .then((response) => {
      res.status = response.status;
      res.data = response.data;
    })
    .catch((error) => {
      handleERROR(error?.response);
    });
  return res;
};

export const DELETE = async (apiPath) => {
  let res = {};
  await axios
    .delete(`${environment.API_URL}/${apiPath}`, getConfig())
    .then((response) => {
      res.status = response.status;
      res.data = response.data;
    })
    .catch((error) => {
      handleERROR(error?.response);
    });
  return res;
};
