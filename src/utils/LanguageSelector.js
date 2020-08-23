import React, {useContext} from 'react';
import {languageOptions} from '../locale/Languages'
import {LanguageContext} from './LanguageProvider';
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {makeStyles} from "@material-ui/core/styles";
import Flag from "react-world-flags";

const useStyles = makeStyles((theme) => ({
    selector: {
        width: '100%'
    },
    flag: {
        marginLeft: 10,
        marginRight: 2,
        height: 16
    }
}));

export default function LanguageSelector() {
    const classes = useStyles();
    const languageContext = useContext(LanguageContext);

    const handleLanguageChange = (event) => {
        const selectedLanguage = languageOptions.find(item => item.id === event.target.value);
        languageContext.setLanguage(selectedLanguage);
    };

    return <Select
            onChange={handleLanguageChange}
            value={languageContext.language.id}
            className={classes.selector}
        >
            {languageOptions.map(item => (
                <MenuItem
                    key={item.id}
                    value={item.id}
                >
                    <Flag className={classes.flag} code={item.flag} /> {item.text}
                </MenuItem>
            ))}
        </Select>;
}