import React from "react";
import "styles/styles.css";
import { BrowserRouter, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { orange } from "@material-ui/core/colors";
import {
  ThemeProvider,
  createMuiTheme,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import { useSelector } from "react-redux";

import Home from "components/Home";
import FeatureVideo from "components/FeatureVideo";
import FeatureVideoDetail from "components/FeatureVideoDetail";
import CreateGallery from "components/CreateGallery";
import TopStories from "components/TopStories";
import NewStories from "components/NewStories";
import Preview from "components/Preview";
import StoryDetail from "components/StoryDetail";
import UserProfile from "components/UserProfile";
import UserSetting from "components/UserSetting";
import SignIn from "components/SignIn";
import SignUp from "components/SignUp";

import NotFound from "components/404";
import CustomRoute from "components/common/CustomRoute";
import Layout from "components/Layout";

function App() {
  const isDark = useSelector((state) => state.theme.isDark);
  const palletType = isDark ? "dark" : "light";
  const mainPrimaryColor = isDark ? orange[500] : `#3D9A88`;
  const mainSecondaryColor = `#FFFFFF`;
  const textColor = isDark ? `#FFFFFF` : `#333333`;
  const bnw = isDark ? `#FFFFFF` : `#000000`;

  // A custom theme for this app
  let theme = createMuiTheme({
    palette: {
      type: palletType,
      primary: {
        main: mainPrimaryColor,
        textColor,
        bnw,
      },
      secondary: {
        main: mainSecondaryColor,
      },
    },
    typography: {
      fontFamily: `"Inter", "Helvetica Neue", Arial, sans-serif`,
    },
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
            <CustomRoute exact path="/videos" component={FeatureVideo} />
            <CustomRoute
              exact
              path="/feature-video-detail"
              component={FeatureVideoDetail}
            />
            <CustomRoute
              exact
              path="/create-gallery"
              component={CreateGallery}
            />
            <CustomRoute exact path="/stories" component={TopStories} />
            <CustomRoute exact path="/add-story" component={NewStories} />
            <CustomRoute exact path="/add-story/preview" component={Preview} />
            <CustomRoute exact path="/story/:id" component={StoryDetail} />
            <CustomRoute exact path="/profile" component={UserProfile} />
            <CustomRoute exact path="/setting" component={UserSetting} />
            <CustomRoute exact path="/signin" component={SignIn} />
            <CustomRoute exact path="/signup" component={SignUp} />
            <CustomRoute exact path="/404" component={NotFound} />
            <CustomRoute component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
