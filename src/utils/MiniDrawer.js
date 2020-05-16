import React from 'react';
import clsx from 'clsx';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import MenuBook from '@material-ui/icons/MenuBook'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from "@material-ui/core/Avatar";
import {Home, Mail, School, SportsEsports, Work} from "@material-ui/icons";
import history from "./history";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        textAlign: "center",
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbarIcon: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    listIcon: {
      paddingLeft: 8
    },
    toolbarButton: {
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

export default function MiniDrawer() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const changePage = (page) => {
        history.push('/'+ page)
    }

    return (
        <div className={classes.root}>
            <CssBaseline />

            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >

                <div className={clsx(classes.toolbarIcon, {
                    [classes.hide]: open,
                })}>
                    <IconButton  onClick={handleDrawerOpen}>
                        <Avatar alt="Yankees Logo" src="https://i.pinimg.com/originals/8c/5e/1d/8c5e1d27016da62ee83d4a178c9b5191.jpg" />
                </IconButton>
                </div>
                <div className={clsx(classes.toolbarButton, {
                    [classes.hide]: !open,
                })}>
                    <IconButton  onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <CloseIcon /> : <CloseIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {[{Name: 'Início', Page: '', Icon: <Home/>},
                        {Name: 'Contato', Page: 'contacts', Icon: <Mail/>},
                        {Name: 'Educação', Page: 'resume', Icon: <School/>},
                        {Name: 'Jogos', Page: 'games', Icon: <SportsEsports/>},
                        {Name: 'Conhecimento', Page: 'knowledge', Icon: <MenuBook/>},
                        {Name: 'Projetos', Page: 'projects', Icon: <Work/>}].map((item, index) => (
                        <ListItem button key={item.Name} onClick={() => changePage(item.Page)}>
                            <ListItemIcon className={classes.listIcon}>
                                {item.Icon}
                            </ListItemIcon>
                            <ListItemText primary={item.Name} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </div>
    );
}
