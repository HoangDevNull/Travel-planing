import React from 'react';
import {
    Box,
    Container,
    Grid,
    Typography,
    makeStyles,
    TextField,
    Select,
    MenuItem,
    InputAdornment
  } from '@material-ui/core';
import { Search } from '@material-ui/icons';

import { categories } from '../data';
import CountrySelect from 'components/common/CountrySelect';

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
                                variant="outlined"
                                fullWidth
                                placeholder="Search"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start"><Search /></InputAdornment>,
                                }}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Box>
                            <Typography className={classes.title}>
                                Pick a categories
                            </Typography>
                            <TextField value={0} select fullWidth variant="outlined">
                                {categories.map((item) => (
                                      <MenuItem key={item.id}  value={item.id}>{item.title}</MenuItem>
                                ))}
                                 <MenuItem  value={0}>All</MenuItem>
                            </TextField>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Box>
                            <Typography className={classes.title}>
                                Pick a country
                            </Typography>
                            <CountrySelect  value="VI" margin="none" label=" "/>
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
                                variant="outlined"
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