import {makeStyles} from "@material-ui/core/styles";
import {Text} from "./LanguageProvider";
import React from "react";

const useStyles = makeStyles(() => ({
    titleBar: {
        fontFamily: "Poiret One, cursive",
        fontSize: 44,
        backgroundColor: "#07233D",
        padding: 20,
        color: "white"
    }
}));

export default function TitleBar(props){
    const classes = useStyles();
    return (
        <div className={classes.titleBar}><Text tid={props.tid}/></div>
    )
}