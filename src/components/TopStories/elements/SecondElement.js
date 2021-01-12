import React from 'react';
import CategoryCard from '../components/CategoryCard';
import { postData } from '../data';
import {
    Box,
    Container,
    Grid,
    Typography,
    makeStyles,
    TextField
  } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root : {
        width : "100%",
    },
    test : {
        // background : "yellow",
    }
}))
const SecondElement = () => {
    const classes = useStyles();
    return (
        <Box className = {classes.root} mt="70px">
            <Container>
                <Grid container justify="space-between" spacing = {3}>  
                    {postData.map((item) => (
                        <Grid item xs={12} sm={6} md={4} key={item.id}>
                            <Box className={classes.test}>
                                <CategoryCard {...item}/>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    )
}
export default SecondElement ;