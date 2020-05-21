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
    }
}));

export default function Projects() {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <TitleBar tid='projectTitle'/>
        </main>
    )
}

