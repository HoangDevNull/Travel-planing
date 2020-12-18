import React from 'react';
import {
  Card,
  Typography,
  CardMedia,
  makeStyles,
  CardActionArea,
  CardActions,
  Box
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%'
  },
  media: {
    height: 330
  }
}));

const CategoryCard = ({ image, title }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={image} title={title} />
      </CardActionArea>
      <CardActions>
        <Box width="100%" my="10px">
          <Typography variant="subtitle1" align="center">
            {title}
          </Typography>
        </Box>
      </CardActions>
    </Card>
  );
};

export default CategoryCard;
