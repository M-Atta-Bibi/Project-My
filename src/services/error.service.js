import pathConstants from "../routes/pathConstants";

const ERRORS_OBJECT = {
  400: "400Error",
  401: "401Error",
  403: "403Error",
  404: "404Error",
  500: "500Error",
};
export const handleERROR = (error) => {
  const Messagekey =
    error?.data?.Message ||
    error?.data?.message ||
    ERRORS_OBJECT[error?.status] ||
    "500Error";

  if (error && error.status === 401) {
    window.location.replace(pathConstants.Login);
    return;
  }
  if (error && error.status === 403) {
    window.location.replace(pathConstants.Home);
    return;
  }
};
