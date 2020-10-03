import React, { useState } from "react";
import { Paper, Grid, Typography, Button } from "@material-ui/core";
import { useTranslation } from "react-i18next";

function App() {
  const [lng, _] = useState(["en", "vi"]);
  const { t, i18n } = useTranslation("home");
  const { language } = i18n;
  console.log(language);
  return (
    <Grid container justify="center" alignItems="center">
      <Grid item xs={6}>
        <Paper elevation={3}>
          <Typography variant="h1" align="center">
            {t("travel-plan")}
          </Typography>
          <Button
            onClick={() => {
              lng.indexOf(language) === 0
                ? i18n.changeLanguage("vi")
                : i18n.changeLanguage("en");
            }}
          >
            Change language
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default App;
