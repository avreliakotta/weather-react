import React from "react";
import './App.css';
import Weather from "./Weather";
import Forecast from "./Forecast";


function App() {
  return (
    <div className="App">
       <header className="App-header">
        
      
      <Weather />
      <Forecast />
        
        

      </header> 
      <footer>
        <small><a href="https://github.com/avreliakotta/my-app" target="_blanck">Open sourced on GitHub </a>coded  by Nataliia Melnyk</small>
      </footer>  
   
    </div>
  );
}

export default App;
