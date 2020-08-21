import React from "react";
import Graph from "./Graph";
import PieChart from "./PieChart";
import Desc from "./Desc"
import useSWR from "swr";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    rightSide:{
        height:"100vh",
        overflowY: "auto",
    }
});

export default function RightSide(props) {
    const classes = useStyles();
  const { data, error } = useSWR("/allData/" + props.term);

  if (error) return "NOthing fou";
  if (!data) return "Loading...";

  return (
    <div className={classes.rightSide}>
      <Graph data={data}/>
        <Desc data={data}/>
      <PieChart data={data}/>

      </div>
  );
}
