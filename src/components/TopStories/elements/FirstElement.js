import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  makeStyles,
  TextField,
  Select,
  MenuItem,
  InputAdornment,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";

import { categories } from "../data";
import CountrySelect from "components/common/CountrySelect";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  title: {
    // fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "18px",
    lineHeight: "27px",
    marginBottom: "15px",
  },
}));

const sortBy = [
  { value: "date-desc", title: "(Date) Desc" },
  { value: "date-asc", title: "(Date) Asc" },
  { value: "name-desc", title: "(Name) A -> Z" },
  { value: "name-asc", title: "(Name) Z -> A" },
];
const FirstElement = ({ onSearch, onFilter }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root} mt="20px">
      <Container>
        <Grid container justify="space-between" spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Box>
              <Typography className={classes.title}>Search Stories</Typography>
              <TextField
                variant="outlined"
                fullWidth
                placeholder="Search"
                name="search"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                }}
                onChange={onSearch}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box>
              <Typography className={classes.title}>
                Pick a categories
              </Typography>
              <TextField
                defaultValue={0}
                select
                name="category"
                fullWidth
                variant="outlined"
                onChange={onFilter}
              >
                {categories.map((item) => (
                  <MenuItem key={item.id} value={item.title}>
                    {item.title}
                  </MenuItem>
                ))}
                <MenuItem value={0}>All</MenuItem>
              </TextField>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box>
              <Typography className={classes.title}>Pick a country</Typography>
              <CountrySelect
                onChange={onFilter}
                value="VI"
                margin="none"
                label=" "
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box>
              <Typography className={classes.title}>Sort by</Typography>
              <TextField
                defaultValue={0}
                select
                name="sort"
                fullWidth
                variant="outlined"
                onChange={onFilter}
              >
                {sortBy.map((item) => (
                  <MenuItem key={item.id} value={item.value}>
                    {item.title}
                  </MenuItem>
                ))}
                <MenuItem value={0}>All</MenuItem>
              </TextField>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default FirstElement;
