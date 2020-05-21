import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import TitleBar from "../utils/TitleBar";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    titleBar: {
        fontFamily: "Poiret One, cursive",
        fontSize: 44,
        backgroundColor: "#07233D",
        padding: 20,
        color: "white"
    }
}));

export default function Games() {
    const classes = useStyles();

    return (
        <main className={classes.content} >
            <TitleBar tid='gamesTitle' />
        </main>
    )
}

