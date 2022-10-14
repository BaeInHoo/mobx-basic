import './App.css';
import React from 'react';
import PersonContainer from './containers/PersonContainer';
import TodoContainer from './containers/TodoContainer';
import TodoFormContainer from './containers/TodoFormContainer';

function App () {

  return (
    <div className="App">
      <header className="App-header">
        <PersonContainer />
        <TodoContainer />
        <TodoFormContainer />
      </header>
    </div>
  );
}

export default App;
