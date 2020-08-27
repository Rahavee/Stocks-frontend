import React from "react";
import Graph from "./Graph";
import PieChart from "./PieChart";
import Desc from "./Desc";
import Tweets from "./Tweets";
import News from "./News";
import Shareholders from "./Shareholders";
import Investors from "./Investors";
import useSWR from "swr";
import { makeStyles } from "@material-ui/core/styles";
import { css } from "@emotion/core";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const useStyles = makeStyles({
  rightSide: {
    padding: 10,
    height: "100vh",
    overflowY: "auto",
    backgroundColor: "light gray",
  },
  descTweetWrapper: {
    display: "flex",
    flexDirection: "row",
    ["@media screen and (max-width: 700px)"]: {
      flexDirection: "column",
    },
  },
  investorsShareWrapper: {
    display: "flex",
    flexDirection: "row",
  },
  loading: { marginTop: "30%" },
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
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {" "}
        No Information found for this stock
      </div>
    );
  }
  if (!data) {
    return (
      <div className={classes.loading}>
        <ClimbingBoxLoader
          css={override}
          size={50}
          color={"#30C2BC"}
          loading={true}
        />
      </div>
    );
  }

  return (
    <div className={classes.rightSide}>
      <h1>{data["closing price"].stock}</h1>
      <Graph data={data} />
      <div className={classes.descTweetWrapper}>
        {data.scarper.status !== "error" ? <Desc data={data} /> : ""}
        <Tweets data={data} />
      </div>
      {data.news.status !== "error" ? <News data={data} /> : ""}
      {data.scarper.status !== "error" ? <PieChart data={data} /> : ""}
      {data.scarper.status !== "error" ? (
        <div className={classes.investorsShareWrapper}>
          <Shareholders data={data} />
          <Investors data={data} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
