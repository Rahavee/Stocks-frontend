import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles({
  container: {
    width: "`100%-20px`",
    backgroundColor: "white",
    borderRadius: 10,
    padding: "10px 5px 10px 10px",
    margin: "10px 10px 10px 10px"
  },
});
export default function News(props) {
  const classes = useStyles();
  console.log(props.data);
  return (
    <div className={classes.container}>
      <h1>News</h1>
      <List>
      {props.data.news.content.map((x) => (
          <div>
          <ListItem alignItems="flex-start">
              <ListItemText
                  primary={x.title}
                  secondary="what"

              />
          </ListItem>
          <Divider variant="inset" component="li" />
          </div>
      ))}

      </List>
    </div>
  );
}
