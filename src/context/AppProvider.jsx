import { ThemeProvider } from "./theme/ThemeProvider";

export const AppProvider = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
