import React, { useState, useEffect } from "react";
import "react-bootstrap";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/toggletheme/palette";
import { GlobalStyles } from "./components/toggletheme/global";

import Toggle from "./components/toggletheme/toogle";
import { useDarkMode } from "./components/toggletheme/useDarkMode";
import RouteHandle from "./routes/Routers";
import SplashScreen from "./splash/SplashScreen";

const App = () => {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 26000000000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <SplashScreen loading={loading} />
      ) : (
        <ThemeProvider theme={themeMode}>
          <>
            <GlobalStyles />
            <RouteHandle />
            <Toggle theme={theme} toggleTheme={toggleTheme} />
          </>
        </ThemeProvider>
      )}
    </div>
  );
};

export default App;
