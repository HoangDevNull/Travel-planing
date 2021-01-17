import React from 'react';
import CategoryCard from '../components/CategoryCard';
import Pagination from '@material-ui/lab/Pagination';
import { postData } from '../data';
import {
    Box,
    Container,
    Grid,
    makeStyles
  } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root : {
        width : "100%",
    },
    itemcard: {
        marginRight : 10,
        marginTop : 20,
        marginBottom : 30
    }
}))
const SecondElement = () => {
    const classes = useStyles();
    return (
        <Box className={classes.root} mt="70px">
            <Container>
                <Grid container spacing={3}>  
                    {postData.map((item) => (
                        <Grid item xs={12} sm={6} md={4} container key={item.id}>     
                                <CategoryCard {...item}/>
                        </Grid>
                    ))}
                </Grid>
                <Grid className={classes.itemcard} container justify="flex-end" spacing={3}>              
                    <Pagination count={10} variant="outlined" />
                </Grid>
            </Container>
        </Box>
    )
}
export default SecondElement ;