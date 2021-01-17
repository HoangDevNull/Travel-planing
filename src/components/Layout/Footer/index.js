import React from 'react';

import {
  Container,
  makeStyles,
  Typography,
  Link,
  Grid,
  Box,
  Divider
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none'
    }
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2)
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[200]
        : theme.palette.grey[800]
  },
  footer_head: {
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6)
    }
  }
}));

const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations']
  },
  {
    title: 'Intersts',
    description: [
      'Adventure travel',
      'Art and culture',
      'Backpacking',
      'Family holidays',
      'Road trips',
      'Food and drink'
    ]
  },
  {
    title: 'TRAVEL BOOKING',
    description: [
      'Hotel, homestays',
      'Flight Tickets',
      'Another resource',
      'Travel Insuarance'
    ]
  },
  {
    title: 'SUBSCRIBE',
    description: [
      'Get more travel inspiration, tips sent straight to your inbox'
    ]
  }
];

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='left'>
      {'Copyright © '}
      <Link color='inherit' href='https://material-ui.com/'>
        ONISM
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Footer = () => {
  const classes = useStyles();
  return (
    <>
      <Box width='100%' my='30px'>
        <Divider variant='fullWidth' />
      </Box>

      <Container component='footer' className={classes.footer_head}>
        <Grid container spacing={4} justify='space-evenly'>
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant='h6' color='textPrimary' gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href='#' variant='subtitle1' color='textSecondary'>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Divider />
      <footer className={classes.footer}>
        <Container>
          <Grid container justify='space-between'>
            <Grid item xs={6}>
              <Copyright />
            </Grid>
            <Grid container justify='flex-end' alignItems='center' item xs={6}>
              <Link color='inherit' href='/'>
                Term and conditions
              </Link>
              <Box ml='20px'>
                <Link color='inherit' href='/'>
                  Privacy policy
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
