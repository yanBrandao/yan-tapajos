import React, { Component } from 'react';
import {makeStyles, useTheme} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSteam } from '@fortawesome/free-brands-svg-icons'
import Button from "@material-ui/core/Button";
import history from "../utils/history";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    iconList: {
        padding: 10
    },
    iconItem: {
        marginLeft: 10,
        marginRight: 10,
        width: 40,
        fontSize: '2.5rem'
    },
    iconItemSteam: {
        marginLeft: 10,
        marginRight: 10,
        width: 40,
        fontSize: '2.5rem',
        position: "relative",
        top: -3
    },
    contactsContent: {
        textAlign: 'center',
        fontFamily: "Roboto",
        fontSize: 40
    },
    titleBar: {
        fontFamily: "Poiret One, cursive",
        fontSize: 44,
        backgroundColor: "#07233D",
        padding: 20,
        color: "white"
    }
}));

const openSocialNetwork = (objectParams) => {
    console.log(objectParams.id)
    window.open("https://www.linkedin.com/in/yanbrandao/", '_blank')
    window.open('https://twitter.com/yantapajos', '_blank')
}

export default function Contacts() {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <main className={classes.content} >
            <div className={classes.titleBar}>Contato</div>
            <div className={classes.contactsContent}>
                <p>
                    Fique a vontade para entrar em contato comigo!

                </p>
                <div>
                    <LinkedInIcon id='linkedin' className={classes.iconItem} onClick={openSocialNetwork}/>
                    <FacebookIcon className={classes.iconItem}/>
                    <InstagramIcon className={classes.iconItem}/>
                    <GitHubIcon className={classes.iconItem}/>
                    <TwitterIcon className={classes.iconItem} onClick={openSocialNetwork}/>
                    <FontAwesomeIcon className={classes.iconItemSteam} icon={faSteam} />
                </div>
            </div>
        </main>
    )
}

