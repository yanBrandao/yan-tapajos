import React from 'react';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    content: {
        display: 'flex',
        position: "fixed",
        right: 5,
        top: 5
    },
    flag: {
        marginLeft: 5,
        width: 32
    }
}));


export default function Flags() {
    const classes = useStyles();

    return (
        <div className={classes.content}>
        </div>
    )
}

