import React from "react";
import { TextField} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import Fetch from "./Fetch"

const useStyles = makeStyles({
  search: {
    flex: 5,
    marginTop:25,

  },
  searchContainer: {
    background: "linear-gradient(#16EF9E, #5C79EF)",
    width: "100%",
    height: "100vh",
    flex: 1,
    minWidth: 270,

  },
  wrapper: {
    display: "flex",
    height: "10vh",
    backgroundColor: "#38B6C5",
    borderBottomWidth: 3,
    borderColor:"#5C79EF",
    borderStyle: "none none solid none"
  },
  searchButton: {
    marginTop: 30,
    flex: 1,

  },
});
export default function Search() {
  const [search, changeSearch] = React.useState("");
  const classes = useStyles();
  return (
    <div className={classes.searchContainer}>
      <div className={classes.wrapper}>
        <SearchIcon className={classes.searchButton} />
        <TextField
          className={classes.search}
          placeholder="NASDAQ Symbol"
          variant="standard"
          value={search}
          onChange={(text) => {
            changeSearch(text.target.value);
          }}
        />
      </div>
      {search !== "" ?  <Fetch term={search}/>: ""}

    </div>
  );
}
