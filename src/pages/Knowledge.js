import React, { Component } from 'react';
import {makeStyles, useTheme} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    }
}));

export default function Knowledge() {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <main className={classes.content}>
            Minhas habilidades
        </main>
    )
}

