import React from 'react';
import NavBar from "./Components/NavBar"
import Search from "./Components/Search";
import RightSide from "./Components/RightSide";
import CssBaseline from '@material-ui/core/CssBaseline';



function App() {
    return (
        <div>
            <CssBaseline />
            <div style={{display:"flex", flexDirection:"row"}}>
          <Search  /> {/*onChangeTerm={{(term) => }}*/}
          <div style={{flex:2}}><RightSide term="NCLH"/></div>
            </div>
        </div>
    );
}

export default App;
