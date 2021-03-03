
//import './App.module.scss';
//import Slider from './Carusel/Slider'
//import Ref from "./Hoock/type_ref";
//import Refer from "./Hoock/useref";
import React from "react";
import {AlertProvider} from './Hoock/Alert/AlertContext'
import Context from "./Hoock/Contex";

function App() {
    return (
   <AlertProvider >
       <div className="App">
      <h1> Hello World</h1>
        <Context/>
    </div>
    </AlertProvider>
  );
}

export default App;
