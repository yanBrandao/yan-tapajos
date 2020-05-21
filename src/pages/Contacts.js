import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSteam} from '@fortawesome/free-brands-svg-icons'
import {Text} from "../utils/LanguageProvider";

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

const openSocialNetwork = (event) => {
    if(event === 'linkedin')
        window.open("https://www.linkedin.com/in/yanbrandao/", '_blank')
    if(event === 'twitter')
        window.open('https://twitter.com/yantapajos', '_blank')
    if(event === 'insta')
        window.open('https://www.instagram.com/yan.brandao/', '_blank')
    if(event === 'facebook')
        window.open('https://www.facebook.com/Yan.Brandao', '_blank')
    if(event === 'git')
        window.open('https://github.com/yanBrandao', '_blank')
    if(event === 'steam')
        window.open('https://steamcommunity.com/id/ybrandao/', '_blank')
}

export default function Contacts() {
    const classes = useStyles();

    return (
        <main className={classes.content} >
            <div className={classes.titleBar}><Text tid='contactTitle'/></div>
            <div className={classes.contactsContent}>
                <p>
                    <Text tid='contactText'/>
                </p>
                <div>
                    <LinkedInIcon className={classes.iconItem} onClick={() => openSocialNetwork('linkedin')}/>
                    <FacebookIcon className={classes.iconItem} onClick={() => openSocialNetwork('facebook')}/>
                    <InstagramIcon className={classes.iconItem} onClick={() => openSocialNetwork('insta')}/>
                    <GitHubIcon className={classes.iconItem} onClick={() => openSocialNetwork('git')}/>
                    <TwitterIcon className={classes.iconItem} onClick={() => openSocialNetwork('twitter')}/>
                    <FontAwesomeIcon className={classes.iconItemSteam} icon={faSteam} onClick={() => openSocialNetwork('steam')}/>
                </div>
            </div>
        </main>
    )
}

