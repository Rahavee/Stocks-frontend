import React from "react";
import Graph from "./Graph";
import PieChart from "./PieChart";
import Desc from "./Desc";
import Tweets from "./Tweets";
import News from "./News"
import useSWR from "swr";
import { makeStyles } from "@material-ui/core/styles";
import { css } from "@emotion/core";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const useStyles = makeStyles({
  rightSide: {
    height: "100vh",
    overflowY: "auto",
    backgroundColor: "beige",
  },
  descTweetWrapper: {
    display: 'flex',
    flexDirection: "row",
  },
});

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export default function RightSide(props) {
  const classes = useStyles();
  const { data, error } = useSWR("/allData/" + props.term);

  if (error) {
    return "NOthing fou";
  }
  if (!data) {
    return (
      <div className="sweet-loading">
        <ClimbingBoxLoader
          css={override}
          size={50}
          color={"#123abc"}
          loading={true}
        />
      </div>
    );
  }

  return (
    <div className={classes.rightSide}>
      <Graph data={data} />
      <div className={classes.descTweetWrapper}>
        <Desc data={data} />
        <Tweets data={data} />
      </div>
        <News data={data}/>
      <PieChart data={data} />
    </div>
  );
}
