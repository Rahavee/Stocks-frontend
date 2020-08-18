import React from "react";
import useSWR from "swr";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  card: {
    height: 60,
    width: "100%",
    backgroundColor: "#485460",
    padding: "20px 0 0 35px",
  },
  info: {
    height: "100%",
    color: "white",
    borderBottom: "solid black 2px",
    width: "100%",
    borderRadius: 2,
    marginBottom: 0,
    paddingBottom:20
  },
  container: {
    marginTop: 0,
  },
});
export default function Fetch(props) {
  const term = props.term;
  const classes = useStyles();
  const { data, error } = useSWR("/search/" + term);

  if (error) {
    return "NOthing fou";
  }
  if (!data) return "Loading...";

  let list = data.content;
  return (
    <div className={classes.container}>
      {list.map((x) => (
        <div className={classes.card}>
          <div className={classes.info}>{x.Symbol}</div>
        </div>
      ))}
    </div>
  );
}
