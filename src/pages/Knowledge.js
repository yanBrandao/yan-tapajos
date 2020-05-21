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

export default function Knowledge() {
    const classes = useStyles();

    return (
        <main className={classes.content} >
            <TitleBar tid='knowledgeTitle'/>
        </main>
    )
}

