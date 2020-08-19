import React from "react";
import Graph from "./Graph";
import PieChart from "./PieChart";
import useSWR from "swr";

export default function RightSide(props) {
  const { data, error } = useSWR("/allData/" + props.term);

  if (error) return "NOthing fou";
  if (!data) return "Loading...";

  return (
    <>
      <Graph data={data}/>
      <PieChart data={data}/>
      </>
  );
}
