import React from "react";
type ThemeContextProps = {
  darkTheme: boolean;
  theme: string;
  setTheme: (theme: boolean) => void;
  toggleThemeMode: () => void;
};

const ThemeContext = React.createContext<ThemeContextProps | undefined>(
  undefined
);

const ThemeProvider = (props: any) => {
  const [darkTheme, setDarkTheme] = React.useState(true);
  const theme = darkTheme ? "dark" : "";

  const toggleThemeMode = React.useCallback(() => {
    setDarkTheme(!darkTheme);
    window.localStorage.setItem("theme", theme);
    console.log(localStorage.theme);
  }, [darkTheme, theme]);

  return (
    <ThemeContext.Provider value={{ darkTheme, toggleThemeMode }} {...props} />
  );
};

const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error(`useTheme must be used within an ThemeProvider`);
  }
  return context;
};

export { ThemeProvider, useTheme };
