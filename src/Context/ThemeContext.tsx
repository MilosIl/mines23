import React, { createContext, useState, useEffect } from 'react';
interface Theme {
  backgroundColor: string;
  textColor: string;
}
const lightTheme: Theme = {
  backgroundColor: '#f5f5f5',
  textColor: '#212121',
};
const darkTheme: Theme = {
  backgroundColor: '#d3d3d3',
  textColor: '#212121',
};
interface ThemeContextProps {
  theme: Theme;
}
const ThemeContext = createContext<ThemeContextProps>({
  theme: darkTheme,
});
interface ThemeProviderProps {
  children: React.ReactNode;
}
const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(lightTheme);
  useEffect(() => {
    const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setCurrentTheme(isDarkMode ? darkTheme : lightTheme);
  }, []);
  return (
    <ThemeContext.Provider value={{ theme: currentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
