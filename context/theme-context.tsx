import React from "react";
type ThemeContextProps = {
  darkMode: boolean;
  theme: string;
  setTheme: (theme: boolean) => void;
  toggleThemeMode: () => void;
};

const ThemeContext = React.createContext<ThemeContextProps | undefined>(
  undefined
);

const ThemeProvider = (props: any) => {
  const [theme, setTheme] = React.useState("dark");
  const colorTheme = theme === "dark" ? "light" : "dark";
  const [darkMode, setDarkMode] = React.useState(
    colorTheme === "light" ? true : false
  );

  React.useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  const toggleThemeMode = React.useCallback(() => {
    setTheme(colorTheme);
    setDarkMode(!darkMode);
  }, [colorTheme, darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleThemeMode }} {...props} />
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
