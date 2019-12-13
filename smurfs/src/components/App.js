import React, { Component } from "react";
import "./App.css";
import { SmurfContext } from '../contexts'
import axios from 'axios'
import Smurf from './Smurf'
import SmurfForm from './SmurfForms'

function App() {
  const initialState = {
    list: [],
    name: '',
    id: 0,
    age: 0,
    height: '',
    edited: 0
  }
  const [state, changeState] = React.useState(initialState)
  React.useEffect(() => {
    axios
      .get(
        'http://localhost:3333/smurfs'
      )
      .then(res => changeState({
        ...state,
        list: res.data
      }))
      .catch(err => console.log(err));
  }, [state.edited]);
  console.log(state)
  return (
    <SmurfContext.Provider value={{ state, changeState }}>
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfForm />
        {state.list.map(e => { return <Smurf key={e.id} item={e} /> })}
      </div>
    </SmurfContext.Provider>
  );
}


export default App;
