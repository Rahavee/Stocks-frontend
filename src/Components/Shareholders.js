import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles({
   container:{
       fontFamily:"Tahoma, Geneva, sans-serif",
       flex:1,
       backgroundColor: "white",
       borderRadius: 10,
       padding: "10px 5px 10px 10px",
       margin: "10px 10px 10px 10px"
   }
});

export default function Shareholders(props){
    const classes = useStyles();
    return(<div className={classes.container}>
        <h1>Top 10 Mutual Funds</h1>
        <List>
        {props.data.scarper.topMutualFunds.map((x,index)=>(<ListItem key={index} alignItems="flex-start">
            <ListItemText

                primary={x.name}
                secondary={x.stake}

            />
        </ListItem>))}
        </List>
    </div>)
}
