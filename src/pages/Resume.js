import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import TitleBar from "../utils/TitleBar";
import Grid from "@material-ui/core/Grid";
import './styles/resume.css'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function Resume() {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <TitleBar tid='resumeTitle'/>

            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <p>
                        Education
                    </p>
                </Grid>
                <Grid item xs={6}>
                    <p>
                        Experience
                    </p>
                </Grid>
                <Grid item xs={6}>
                <div className='dotContainer'>
                        teste
                    asd
                    asd
                    asd
                    as
                    das
                    da
                        sdasdasdasd

                </div>
                    <p className='dotContainer'>
                        teste2asdasdasdasd
                        asdasd
                        as
                        da
                        sd
                        asd
                        asdasdasd
                    </p>
            </Grid>
            <Grid item xs={6}>
                <ul>
                    <li>

                    </li>
                </ul>
            </Grid>
            </Grid>
        </main>
    )
}

