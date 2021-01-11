import React from 'react';
import {
    Card,
    Typography,
    CardMedia,
    makeStyles,
    CardActionArea,
    CardActions,
    Box,Grid,Link
  } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
        borderRadius : "10px",
    },
    media: {
        height: 250
    },
    outStanding :{
        position: "absolute",
        top : "23px",
        left : 0,
        fontWeight : "bold" ,
        padding : "10px 13px",
        background : "#EC4C47",
        color : "#ffffff",
    },
    avatar : {
        position : "absolute",
        right : 28,
        zIndex : 2,
        bottom : "-24px",
        width : 48,
        height : 48,
        borderRadius : "50%",
        border : "4px solid #ffffff",
    },
    location : {
        fontSize : 18,
        color : '#757575',
        marginBottom : 10
    },
    cardTitle : {
        color : '#000000',
        fontSize: "24px",
        fontWeight: 400,
        marginBottom : 10
    },
    btnRead : {
        color : "#3D9A88",
        padding : "10px 15px",
        fontWeight : "bold",
        border : "1px solid #3D9A88",
        cursor : "pointer",
    },
    cardItemRead : {
        marginTop : 10 ,
        marginBottom : 20 ,
    }
}));
const CategoryCard = (obj) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia className={classes.media} image={obj.image} />
                <Typography className={classes.outStanding}>
                    Road Trip
                </Typography>
                <CardMedia className={classes.avatar} image={obj.user.avatar} />
            </CardActionArea>
            <CardActions>
                <Grid container>
                    <Grid item xs={12}>
                        <Box className={classes.location}>
                            <CardMedia className={classes.icon}/>
                            {obj.location}
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Box className={classes.cardTitle}>
                            {obj.title}
                        </Box>
                    </Grid>
                    <Grid container justify="space-between" item xs={12} className={classes.location}>
                        <Grid>{obj.createdAt}</Grid>
                        <Grid>1080 viewer</Grid>
                    </Grid>
                    <Grid container justify="space-between" className={classes.cardItemRead} item xs={12}>
                        <Grid>Rating</Grid>
                        <Grid>
                            <Link className={classes.btnRead}>
                                Read More
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </CardActions>
        </Card>
    );
}
export default CategoryCard