import React from 'react';
import NavBar from "./Components/NavBar"
import Search from "./Components/Search";
import CssBaseline from '@material-ui/core/CssBaseline';
import ApexCharts from 'apexcharts'



function App() {
    return (
        <div>
            <CssBaseline />
            <NavBar/>
            <div style={{display:"flex", flexDirection:"row"}}>
          <Search />
          <div style={{flex:2}}/>
            </div>
        </div>
    );
}

export default App;
