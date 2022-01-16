import React, { useState, useEffect } from "react";
import "react-bootstrap";
import Logo from "./assets/logo.png";
import HashLoader from "react-spinners/HashLoader";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/toggletheme/palette";
import { GlobalStyles } from "./components/toggletheme/global";

import Toggle from "./components/toggletheme/toogle";
import { useDarkMode } from "./components/toggletheme/useDarkMode";
import RouteHandle from "./routes/Routers";

const App = () => {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2800);
  }, []);

  /* if (!componentMounted) {
     return <div />
  }; */

  return (
    <div className="App">
      {loading ? (
        <div className="sweet-loading">
          <HashLoader loading={loading} size={150} color={"#283f50"} />
          <div className="bottom-ind">
            <img className="logo" src={Logo} alt="" srcSet />
            <h4>Fabric Engineering 46 (BUTEX)</h4>
            <p>Developed by Arnob Mahmud</p>
          </div>
        </div>
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
