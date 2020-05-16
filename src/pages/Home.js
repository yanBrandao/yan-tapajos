import React, { Component } from 'react';
import {makeStyles, useTheme} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import {Public} from "@material-ui/icons";
import Button from "@material-ui/core/Button";


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
    const theme = useTheme();

        return (
            <main id='mainHome' className={classes.content}>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <img className={classes.profileImage} width='80%' alt='profile' src={process.env.PUBLIC_URL + '/home02.jpg'} />
                    </Grid>
                    <Grid item xs={6} className={classes.divTitle}>
                        <p className={classes.title}>
                            <b>Opa, tudo bem?</b>
                        </p>
                        <p className={classes.title}>
                            <b>Meu nome é Yan Tapajós</b>
                        </p>
                        <p className={classes.title}>
                            <b>Um cara apaixonado por Computação e Jogos!</b>
                        </p>
                        <p className={classes.text}>
                            Engenheiro de Software
                        </p>
                        <p className={classes.text}>
                            <b className={classes.identifier}>Idade:</b> 27 anos
                        </p>
                        <p className={classes.text}>
                            <b className={classes.identifier}>Nascimento:</b> 25-07
                        </p>
                        <p className={classes.text}>
                            <b className={classes.identifier}> Endereço:</b> Paulínia - São Paulo
                        </p>
                        <p className={classes.text}>
                            <b className={classes.identifier}>Freelancer:</b> Disponível
                        </p>
                        <p className={classes.text}>
                            <b className={classes.identifier}>Estado Civil:</b> Casado (Com a pessoa mais mavarilhosa do mundo.)
                        </p>
                        <Button  variant="contained" color="primary">
                            Baixar CV
                        </Button>
                    </Grid>
                </Grid>
            </main>
        )
}

