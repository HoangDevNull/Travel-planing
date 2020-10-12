import React from 'react';
import 'styles/styles.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  lightBlue,
  orange,
  deepOrange,
  deepPurple
} from '@material-ui/core/colors';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';

import Home from 'components/Home';
import NotFound from 'components/404';

function App() {
  const isDark = useSelector((state) => state.theme.isDark);
  const palletType = isDark ? 'dark' : 'light';
  const mainPrimaryColor = isDark ? orange[500] : lightBlue[500];
  const mainSecondaryColor = isDark ? deepOrange[900] : deepPurple[500];

  // A custom theme for this app
  const theme = createMuiTheme({
    palette: {
      type: palletType,
      primary: {
        main: mainPrimaryColor
      },
      secondary: {
        main: mainSecondaryColor
      }
    }
  });
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
