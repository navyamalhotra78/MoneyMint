import { useState, useEffect, useMemo } from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Icon from "@mui/material/Icon";
import VuiBox from "components/VuiBox";
import Sidenav from "examples/Sidenav";
import Configurator from "examples/Configurator";
import theme from "assets/theme";
import themeRTL from "assets/theme/theme-rtl";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import routes from "routes";
import { useVisionUIController, setMiniSidenav, setOpenConfigurator } from "context";

export default function App() {
  const [controller, dispatch] = useVisionUIController();
  const { miniSidenav, direction, layout, openConfigurator, sidenavColor } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const [rtlCache, setRtlCache] = useState(null);
  const { pathname } = useLocation();

  useMemo(() => {
    const cacheRtl = createCache({
      key: "rtl",
      stylisPlugins: [rtlPlugin],
    });
    setRtlCache(cacheRtl);
  }, []);

  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);

  useEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1";
    script.async = true;
    document.body.appendChild(script);

    window.addEventListener('dfMessengerLoaded', function (event) {
      const dfMessenger = document.querySelector('df-messenger'); 
      const style = document.createElement('style');
  
      const nonMobileMinWidth = 501; // Breakpoint where DF Messenger switches between mobile/non-mobile styles
  
      style.textContent = '@media screen and (min-width: ' + nonMobileMinWidth + 'px) { .chat-wrapper { max-height: 65% } }';
  
      dfMessenger.shadowRoot.querySelector('df-messenger-chat').shadowRoot.appendChild(style);
    });

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }
      if (route.route) {
        return <Route exact path={route.route} component={route.component} key={route.key} />;
      }
      return null;
    });

  const configsButton = (
    <VuiBox
      display="flex"
      justifyContent="center"
      sx={{ cursor: "pointer" }}
      onClick={handleConfiguratorOpen}
    >
    </VuiBox>
  );

  return (
    <>
      <style>
        {`
          .chat-wrapper {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 400px; /* Adjust the width */
            height: 500px; /* Adjust the height */
            z-index: 1000;
          }
        `}
      </style>
      {direction === "rtl" ? (
        <CacheProvider value={rtlCache}>
          <ThemeProvider theme={themeRTL}>
            <CssBaseline />
            {layout === "dashboard" && (
              <>
                <Sidenav
                  color={sidenavColor}
                  brand=""
                  brandName="MoneyMint"
                  routes={routes}
                  onMouseEnter={handleOnMouseEnter}
                  onMouseLeave={handleOnMouseLeave}
                />
                <Configurator />
                {configsButton}
              </>
            )}
            {layout === "vr" && <Configurator />}
            <Switch>
              {getRoutes(routes)}
              <Redirect from="*" to="/dashboard" />
            </Switch>
            <div className="chat-wrapper">
              <df-messenger
                intent="WELCOME"
                chat-title="MoneyMint"
                agent-id="c5a67c08-7b08-477d-8ca9-9a98fba0bfc2"
                language-code="en"
              ></df-messenger>
            </div>
          </ThemeProvider>
        </CacheProvider>
      ) : (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {layout === "dashboard" && (
            <>
              <Sidenav
                color={sidenavColor}
                brand=""
                brandName="MoneyMint"
                routes={routes}
                onMouseEnter={handleOnMouseEnter}
                onMouseLeave={handleOnMouseLeave}
              />
              <Configurator />
              {configsButton}
            </>
          )}
          {layout === "vr" && <Configurator />}
          <Switch>
            {getRoutes(routes)}
            <Redirect from="*" to="/dashboard" />
          </Switch>
          <div className="chat-wrapper">
            <df-messenger
              intent="WELCOME"
              chat-title="MoneyMint"
              agent-id="c5a67c08-7b08-477d-8ca9-9a98fba0bfc2"
              language-code="en"
            ></df-messenger>
          </div>
        </ThemeProvider>
      )}
    </>
  );
}
