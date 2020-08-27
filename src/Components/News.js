import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles({
  container: {
    width: "`100%-20px`",
    backgroundColor: "white",
    borderRadius: 10,
    padding: "10px 5px 10px 10px",
    margin: "10px 10px 10px 10px",
  },
  urls: {
    textDecoration: "none",
    color: "#597EEC",
  },
});
export default function News(props) {
  const classes = useStyles();
  console.log(props.data);
  return (
    <div className={classes.container}>
      <h1>News</h1>
      <List>
        {props.data.news.content.map((x, index) => {
          if (x.polarity!==undefined){
          return (
            <div key={index}>
              <ListItem alignItems="flex-start">
                <ListItemText
                  primary={
                    <a className={classes.urls} href={x.url}>
                      {x.title}
                    </a>
                  }
                  secondary={"Sentiment score: " + x.polarity.compound}
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </div>
          );}
          else{
            return(<></>)
          }
        })}
      </List>
    </div>
  );
}
