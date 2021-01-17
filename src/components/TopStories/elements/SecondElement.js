import React from 'react';
import CategoryCard from '../components/CategoryCard';
import Pagination from '@material-ui/lab/Pagination';
import { postData } from '../data';
import {
    Box,
    Container,
    Grid,
    Typography,
    makeStyles
  } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root : {
        width : "100%",
    },
    test : {
        // background : "yellow",
    },
    itemcard: {
        float : 'right',
        marginRight : 10,
        marginTop : 20,
        marginBottom : 30
    },
    pagecard: {
        marginTop : 40,
        marginLeft : 300,
        marginBottom : 40,
        fontSize : "18px",
        float : 'right',
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
                <Grid className = {classes.itemcard} spacing = {3}>
                        <Typography className = {classes.pagecard}>
                            <Pagination count={10} variant="outlined" />
                        </Typography>
                </Grid>
            </Container>
        </Box>
    )
}
export default SecondElement ;