import React, { useState } from "react";
import Search from "./Components/Search";
import RightSide from "./Components/RightSide";
import CssBaseline from "@material-ui/core/CssBaseline";


function App() {
  const [term, setTerm] = useState("");
  return (
    <div>
      <CssBaseline />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Search onChangeTerm={(term) => setTerm(term)} />
        {term !== "" ? (
          <div style={{ flex: 3 }}>
            <RightSide term={term} />
          </div>
        ) : (
            <div style={{ flex: 3,display:'flex', justifyContent:"center", alignItems:"center"}}>
                Choose a stock to display data
            </div>
        )}
      </div>
    </div>
  );
}

export default App;
