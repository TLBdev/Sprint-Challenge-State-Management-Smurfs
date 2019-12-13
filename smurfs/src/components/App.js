import React, { Component } from "react";
import "./App.css";
import { SmurfContext } from '../contexts'
import axios from 'axios'


function App() {
  const initialState = {
    list: [],
    name: '',
    id: 0,
    age: 0,
    heoght: ''
  }
  const [state, changeState] = React.useState(initialState)
  React.useEffect(() => {
    axios
      .get(
        'localhost:3333/smurfs'
      )
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }, []);
  return (
    <SmurfContext.Provider value={{ state, changeState }}>
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
      </div>
    </SmurfContext.Provider>
  );
}


export default App;
