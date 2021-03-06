import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
    paper: {
        backgroundImage: (props) => props.item.backgroundImage,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        height: "55vh",
        [theme.breakpoints.up("sm")]: {
            backgroundImage: (props) => props.item.backgroundImage,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            height: "75vh"
        }
    },
    box: {
        backgroundColor: "black",
        width: "30vw",
        display: "block",
        position: "absolute",
        right: 0,
        padding: "calc( 1.5vh + 1.5vw )",
        paddingLeft: "1vw",
        zIndex: 5
    },
    text: {
        color: "#FFFFFF",
        padding: "calc( 0.5vh + 0.5vw )",
        fontSize: "calc( 1vh + 1vw )"
    }
}));

const ItemPro = (props) => {
    const classes = useStyles(props);
    return (
        <Paper className={classes.paper}>
            <Grid container className={classes.box}>
                <Grid item>
                    <Typography
                        className={classes.text}
                        style={{ fontSize: "calc( 1.5vh + 1.5vw )" }}
                    >
                        {props.item.name}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography className={classes.text}>
                        {props.item.description}
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default ItemPro;
