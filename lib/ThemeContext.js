import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  return <ThemeProvider value={{ theme, setTheme }}>{children}</ThemeProvider>;
}

export function useTheme() {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) {
    throw new Error("ThemeContext 안에서 써야 합니다!");
  }
  const { theme, setTheme } = themeContext;
  useEffect(() => {
    document.body.classList.add(theme);
    return document.body.classList.remove(theme);
  }, [theme]);
  return { theme, setTheme };
}
