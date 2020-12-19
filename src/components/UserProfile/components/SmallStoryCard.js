import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: '100%',
    display: 'flex',
    cursor: 'pointer'
  },
  cover: {
    width: '40%'
  },
  content: {
    width: '70%'
  },
  font_bold: {
    fontWeight: 'bold'
  }
});

const SmallStoryCard = ({ image, title, content, category, createdAt }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        alt="story"
        image={image}
        className={classes.cover}
      />
      <CardContent className={classes.content}>
        <Typography gutterBottom variant="body2" className={classes.font_bold}>
          {title}
        </Typography>
        <Typography variant="caption" color="textSecondary" component="p">
          {`${category}, ${createdAt}`}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SmallStoryCard;
