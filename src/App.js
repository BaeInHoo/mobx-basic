import logo from './logo.svg';
import './App.css';
import { observer } from 'mobx-react';
import React, { useContext } from 'react';
import PersonContext from './contexts/PersonContext';
import autobind from 'autobind-decorator';
import { computed } from 'mobx';

function App () {
  const personStore = useContext(PersonContext);

  const age10 = computed(() => {
    return Math.floor(personStore.age / 10) * 10;
  }).get();

  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{age10}</p>
          <p>
            <button onClick={click}>plus</button>
          </p>
        </header>
      </div>
  );
  
  function click() {
    personStore.plus();
  }
};

export default observer(App);
