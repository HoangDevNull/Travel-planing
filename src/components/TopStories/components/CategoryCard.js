import React from 'react';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import VisibilityIcon from '@material-ui/icons/Visibility';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import StarIcon from '@material-ui/icons/Star';
import { orange} from '@material-ui/core/colors';
import {
    Card,
    Typography,
    CardMedia,
    makeStyles,
    CardActionArea,
    CardActions,
    Box,Grid,Link,Icon
  } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '85%',
        marginLeft: "30px",
        filter: "drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.25))",
        borderRadius : "10px"
    },
    media: {
        height: 250
    },
    outStanding :{
        position: "absolute",
        top : "23px",
        left : 0,
        size : 20,
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
        fontSize : 30,
        color : '#757575',
        
    },
    cardTitle : {
        display : 'flex',
        alignItems : 'center',
        color : '#000000',
        fontSize: "20px",
        fontWeight: 400,
        marginBottom : 10,
        fontWeight: "bold",
        
    },
    btnRead : {
        color : "#3D9A88",
        padding : "10px 15px",
        fontWeight : "bold",
        border : "1px solid #3D9A88",
        cursor : "pointer",
    },
    cardItemRead : {
        marginLeft : 0,
        marginTop : 10 ,
        marginBottom : 20 ,
    },
    icon : {
        marginRight : 5,
        fontSize : "20px",
        marginBottom : "0.3rem",
    },
    itemcard: {
        marginLeft :10,
        marginRight : 10,

    },
    ul: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
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
            <CardActions className={classes.itemcard} >
                <Grid container>
                    <Typography item xs={12}>
                        <Box className={classes.cardTitle}>
                            <LocationOnIcon className={classes.icon} />
                            <Typography variant="caption" gutterBottom>
                                {obj.location}
                            </Typography>
                        </Box>
                    </Typography>
                    <Typography item xs={12}>
                        <Box className={classes.cardTitle}>
                            {obj.title}
                        </Box>
                    </Typography>
                    <Grid container item xs={12} justify="space-between">
                        <Box className={classes.cardTitle}>
                            <AccessTimeIcon className={classes.icon}/>
                            <Typography variant="caption" gutterBottom>
                                June, 29th, 2020
                            </Typography>
                        </Box>
                        <Box className={classes.cardTitle}>
                            <VisibilityIcon className={classes.icon}/>
                            <Typography variant="caption"  gutterBottom>
                                1080 viewer
                            </Typography>
                        </Box>
                    </Grid>
                    
                    
                    {/* <Grid container justify="space-between" item xs={12} className={classes.location}>
                        <Grid>{obj.createdAt}</Grid>
                        <Grid>1080 viewer</Grid>
                    </Grid> */}
                    <Grid container justify="space-between" className={classes.cardItemRead} item xs={12}>
                        <Grid>
                            <StarIcon variant="outlined" style={{ color: orange[500]  }} className={classes.icon} ></StarIcon>
                            <StarIcon variant="outlined" style={{ color: orange[500]  }} className={classes.icon} ></StarIcon>
                            <StarIcon variant="outlined" style={{ color: orange[500]  }} className={classes.icon} ></StarIcon>
                            <StarIcon variant="outlined" style={{ color: orange[500]  }} className={classes.icon} ></StarIcon>
                            <StarIcon variant="outlined" style={{ color: orange[500]  }} className={classes.icon} ></StarIcon>
                        </Grid>
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