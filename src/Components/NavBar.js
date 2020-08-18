import React from 'react';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        backgroundColor: 'blue',
        width: '100%',
        height: '10vh',
    }
});

export default function NavBar() {
    const classes = useStyles();
    return (
    <div className={classes.root}/>
    )
}
