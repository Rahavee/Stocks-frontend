import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    container:{
        backgroundColor:"white",
        margin: "10px 10px 10px 10px",
        padding:"10px 5px 10px 10px",
        flex:1,
        color:"black",
        borderRadius:10,

    }
});

export default function Desc(props){
    const classes = useStyles();
    return(<div className={classes.container}><h1>About</h1>{props.data.scarper.desc}</div>)
}
