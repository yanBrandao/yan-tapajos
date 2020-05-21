import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {Text} from "../utils/LanguageProvider";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    profileImage: {
        borderRadius: 12,
    },
    title: {
        fontFamily: "Poiret One, cursive",
        fontSize: 32,
        marginTop: 0,
        marginBottom: 0

    },
    divTitle: {
        marginTop: '15%'
    },
    text: {
        fontFamily: "Roboto"

    },
    identifier: {
        fontFamily: "Roboto",
        color: "#07233D"
    }
}));

export default function Home() {
    const classes = useStyles();

        return (
            <main id='mainHome' className={classes.content}>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <img className={classes.profileImage} width='80%' alt='profile' src={process.env.PUBLIC_URL + '/home02.jpg'} />
                    </Grid>
                    <Grid item xs={6} className={classes.divTitle}>
                        <p className={classes.title}>
                            <b><Text tid='homePhrase01'/></b>
                        </p>
                        <p className={classes.title}>
                            <b><Text tid='homePhrase02'/></b>
                        </p>
                        <p className={classes.title}>
                            <b><Text tid='homePhrase03'/></b>
                        </p>
                        <p className={classes.text}>
                            <Text tid='homeSubtitle'/>
                        </p>
                        <p className={classes.text}>
                            <b className={classes.identifier}>
                                <Text tid='homeAgeBullet'/>
                            </b> <Text tid='homeAgeContent'/>
                        </p>
                        <p className={classes.text}>
                            <b className={classes.identifier}>
                                <Text tid='homeAnniversaryBullet'/>
                            </b> <Text tid='homeAnniversaryContent'/>
                        </p>
                        <p className={classes.text}>
                            <b className={classes.identifier}>
                                <Text tid='homeAddressBullet'/>
                            </b> <Text tid='homeAddressContent'/>
                        </p>
                        <p className={classes.text}>
                            <b className={classes.identifier}>
                                <Text tid='homeFreelancerBullet'/>
                            </b> <Text tid='homeFreelancerContent'/>
                        </p>
                        <p className={classes.text}>
                            <b className={classes.identifier}>
                                <Text tid='homeCivilStateBullet'/>
                            </b> <Text tid='homeCivilStateContent'/>
                        </p>
                        <Button  variant="contained" color="primary">
                            <Text tid="buttonCV" />
                        </Button>
                    </Grid>
                </Grid>
            </main>
        )
}

