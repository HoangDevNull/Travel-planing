import React from 'react';
import 'styles/styles.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { orange, deepOrange } from '@material-ui/core/colors';
import {
  ThemeProvider,
  createMuiTheme,
  responsiveFontSizes
} from '@material-ui/core/styles';
import { useSelector } from 'react-redux';

import Home from 'components/Home';
import NotFound from 'components/404';
import CustomRoute from 'components/common/CustomRoute';
import Layout from 'components/Layout';

function App() {
  const isDark = useSelector((state) => state.theme.isDark);
  const palletType = isDark ? 'dark' : 'light';
  const mainPrimaryColor = isDark ? orange[500] : `#3D9A88`;
  const mainSecondaryColor = isDark ? deepOrange[900] : `#F07151`;
  const textColor = isDark ? `#FFFFFF` : `#333333`;

  // A custom theme for this app
  let theme = createMuiTheme({
    palette: {
      type: palletType,
      primary: {
        main: mainPrimaryColor,
        textColor
      },
      secondary: {
        main: mainSecondaryColor
      }
    },
    typography: {
      fontFamily: `"Poppins", "Helvetica Neue", Arial, sans-serif`
    }
  });

  theme = responsiveFontSizes(theme);
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />

      <BrowserRouter>
        <Layout>
          <Switch>
            <CustomRoute exact path="/" component={Home} />
            <CustomRoute exact path="/home" component={Home} />
            <CustomRoute exact path="/404" component={NotFound} />
            <CustomRoute component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
