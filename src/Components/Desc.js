import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    container:{
        backgroundColor:"white",
        margin: "10px 10px 10px 10px",
        padding:"10px 5px 10px 10px",
        width:"50%",
        color:"black",
        borderRadius:10,
        height:350
    }
});

export default function Desc(props){
    const classes = useStyles();
    return(<div className={classes.container}>{props.data.scarper.desc}</div>)
}
