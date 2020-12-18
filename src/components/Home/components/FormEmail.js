import React from 'react';
import {
  Card,
  Typography,
  makeStyles,
  Button,
  CardContent,
  CardHeader,
  TextField,
  CardActions,
  Box
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%'
  },
  font_bold: {
    fontWeight: 'bold'
  }
}));

const FormEmail = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader
        disableTypography
        title={
          <Typography noWrap className={classes.font_bold} variant="h6">
            Get weekly inspirations
          </Typography>
        }
        subheader={
          <Typography className={classes.font_bold} variant="caption">
            Get more travel inspiration, tips sent straignht to your indbox
          </Typography>
        }
      />
      <CardContent>
        <Box width="100%" mt="-5px">
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Enter your email"
          />
        </Box>
      </CardContent>
      <CardActions>
        <Box mx="9px" mb="5px" width="100%">
          <Button fullWidth variant="contained" size="large" color="primary">
            Send now
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
};

export default FormEmail;
