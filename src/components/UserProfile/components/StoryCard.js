import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  font_bold: {
    fontWeight: 'bold'
  }
});

const StoryCard = ({ image, title, content, category, createdAt }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia component="img" alt="story" height="200" image={image} />
        <CardContent>
          <Typography
            gutterBottom
            variant="body1"
            className={classes.font_bold}
            noWrap
          >
            {title}
          </Typography>
          <Typography variant="caption" color="textSecondary" component="p">
            {`${category}, ${createdAt}`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default StoryCard;
