import React, {useContext} from 'react';
import {languageOptions} from '../locale/Languages'
import {LanguageContext} from './LanguageProvider';
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    selector: {
        width: '100%'
    },
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
                    {item.text}
                </MenuItem>
            ))}
        </Select>;
}