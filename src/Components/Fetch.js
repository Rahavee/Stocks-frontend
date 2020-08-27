import React from "react";
import useSWR from "swr";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  card: {
    height: 48,
    width: "`100%-20px`",
    backgroundColor: "rgba(0,0,0,0.2)",
    padding: "15px 0 0 35px",
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
    color: "white",
    borderRadius: 5,
    fontFamily: "Tahoma, Geneva, sans-serif",
    "&:hover": {
      cursor: "pointer",
    },
  },
});

export default function Fetch(props) {
  const term = props.term;
  const classes = useStyles();
  const [stock, setStock] = React.useState("");
  const { data, error } = useSWR("/search/" + term);

  if (error) return "Nothing Found";

  if (!data) return "Loading......";

  let list = data.content;
  return (
    <div>
      {list.map((x, index) => (
        <div
          key={index}
          className={classes.card}
          onClick={() => {
            setStock(x.Symbol);
            props.onClickStock(x.Symbol);
            console.log(x.Symbol);
          }}
        >
          {x.Symbol}
        </div>
      ))}
    </div>
  );
}
