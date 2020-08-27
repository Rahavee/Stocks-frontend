import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
      fontFamily:"Tahoma, Geneva, sans-serif",
      backgroundColor:"white",
      margin: "10px 10px 10px 10px",
      padding:"10px 5px 10px 10px",
      flex:1,
      color:"black",
      borderRadius:10,
      height:350
  },
});

export default function Tweets(props) {
  const tweetData = props.data.tweets.content.data.sentiment;
const classes = useStyles();
  return (
    <div className={classes.container}>
      <h1>Tweet sentiment</h1>
      <p>Weighed Polarity: {tweetData.averageWeighedPolarity}</p>
      <p>Negative Tweets : {tweetData.negativeTweetsCount}</p>
        <p>Neutral Tweets: {tweetData.neutralTweetsCount}</p>
        <p>Positive Tweets : {tweetData.positiveTweetsCount}</p>
    </div>
  );
}
