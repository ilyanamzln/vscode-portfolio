/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useLocalStorageState("nord", "theme");

  function changeTheme(newTheme) {
    setTheme(newTheme);
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemeContext);
  if (!context)
    throw new Error("ThemeContext was used outside of ThemeContextProvider");
  return context;
}

export { useTheme, ThemeProvider };
