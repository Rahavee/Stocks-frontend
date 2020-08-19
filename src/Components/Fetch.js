import React from "react";
import useSWR from "swr";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  card: {
    height: 60,
    width: "`100%-20px`",
    //backgroundColor: "#ffffff",
    backgroundColor: "rgba(0,0,0,0.2)",
    padding: "20px 0 0 35px",
    marginTop:10,
    marginRight:10,
    marginLeft:10,
    color:"white",
    borderRadius:5
  },
});


export default function Fetch(props) {
  const term = props.term;
  const classes = useStyles();
  const { data, error } = useSWR("/search/" + term);

  if (error) return "NOthing fou";

  if (!data) return "Loading...";

  let list = data.content;
  return (
    <div >
      {list.map((x) => (
        <div className={classes.card}>
          {x.Symbol}
        </div>
      ))}
    </div>
  );
}
