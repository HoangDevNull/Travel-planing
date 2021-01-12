import React from 'react';
import {
    Box,
    Container,
    Grid,
    Typography,
    makeStyles,
    TextField,
    Select
  } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
      },
    title : {
        // fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "18px",
        lineHeight: "27px",
        marginBottom : "15px",
    }
}))
const FirstElement = () => {
    const classes = useStyles();
    return (
        <Box className = {classes.root} mt="20px">
            <Container>
                <Grid container justify="space-between" spacing = {3}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Box>
                            <Typography className={classes.title}>
                                Search Stories
                            </Typography>
                            <TextField
                                fullWidth
                                placeholder="Enter your email"
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Box>
                            <Typography className={classes.title}>
                                Pick a categories
                            </Typography>
                            <Select 
                                fullWidth
                                native
                                inputProps={{
                                  name: 'All',
                                  id: 'All-native-simple',
                                }}
                            >
                                <option aria-label="None" value="" />
                                <option value={10}>Ten</option>
                                <option value={20}>Twenty</option>
                                <option value={30}>Thirty</option>
                            </Select>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Box>
                            <Typography className={classes.title}>
                                Pick a country
                            </Typography>
                            <Select 
                                fullWidth
                                native
                                inputProps={{
                                  name: 'All',
                                  id: 'All-native-simple',
                                }}
                            >
                                <option aria-label="None" value="" />
                                <option value={10}>Ten</option>
                                <option value={20}>Twenty</option>
                                <option value={30}>Thirty</option>
                            </Select>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Box>
                            <Typography className={classes.title}>
                                Pick a date time
                            </Typography>
                            <TextField
                                fullWidth
                                id="date"
                                type="date"
                                defaultValue="2017-05-24"
                                className={classes.textField}
                                InputLabelProps={{
                                shrink: true,
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
export default FirstElement ;