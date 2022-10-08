import logo from './logo.svg';
import './App.css';
import { observer } from 'mobx-react';
import React, { useContext } from 'react';
import PersonContext from './contexts/PersonContext';
import autobind from 'autobind-decorator';
import { action, computed } from 'mobx';

function App () {
  const personStore = useContext(PersonContext);

  const age10 = computed(() => {
    return Math.floor(personStore.age / 10) * 10;
  }).get();

  console.log("render", personStore.age, personStore.name);

  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {personStore.age}, {personStore.name}
          </p>
          <p>
            <button onClick={click}>plus</button>
          </p>
        </header>
      </div>
  );
  
  function click() {
    // personStore.plus();
    setTimeout(
      action(() => {
        personStore.age = 45;
        personStore.name = "WoongJae";
      }), 
      500
    ); 
  }
};

export default observer(App);
