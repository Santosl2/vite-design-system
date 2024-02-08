import { ReactNode, createContext } from "react";
import { WhitelabelProps } from "../interfaces/Whitelabel.types";
import { DEFAULT_THEME } from "../../theme/default-theme";
import { ThemeProvider } from "styled-components";
import { combineTheme } from "../..";
import { GlobalStyles } from "../../theme/global";

const WhitelabelContext = createContext<{
  theme: WhitelabelProps;
}>({
  theme: DEFAULT_THEME,
});

function WhitelabelProvider({
  children,
  whitelabelTheme = DEFAULT_THEME,
}: {
  children: ReactNode;
  whitelabelTheme: WhitelabelProps;
}) {
  const combinedTheme = combineTheme({
    hostCompany: whitelabelTheme,
  });

  console.log(combinedTheme);
  return (
    <WhitelabelContext.Provider value={{ theme: whitelabelTheme }}>
      <ThemeProvider theme={combinedTheme}>{children}</ThemeProvider>
      <GlobalStyles />
    </WhitelabelContext.Provider>
  );
}

export { WhitelabelContext, WhitelabelProvider };
