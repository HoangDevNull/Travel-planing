import React from "react";
import CategoryCard from "../components/CategoryCard";
import Pagination from "@material-ui/lab/Pagination";

import {
  Box,
  Container,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  itemcard: {
    marginRight: 10,
    marginTop: 20,
    marginBottom: 30,
  },
}));
const SecondElement = ({ data }) => {
  const classes = useStyles();
  if (data.length === 0) {
    return (
      <Box width="100%" mt={5}>
        <Typography variant="h4" align="center">
          {" "}
          Sorry, no result found{" "}
        </Typography>
      </Box>
    );
  }
  return (
    <Box className={classes.root} mt="70px">
      <Container>
        <Grid container spacing={3}>
          {data.map((item) => (
            <Grid item xs={12} sm={6} md={4} container key={item.id}>
              <CategoryCard {...item} />
            </Grid>
          ))}
        </Grid>
        <Grid
          className={classes.itemcard}
          container
          justify="flex-end"
          spacing={3}
        >
          <Pagination
            count={data.length}
            defaultPage={0}
            siblingCount={0}
            variant="outlined"
          />
        </Grid>
      </Container>
    </Box>
  );
};
export default SecondElement;
