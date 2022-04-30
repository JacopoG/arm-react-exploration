import { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { LabFormula } from './LabFormula';

function App() {

  useEffect(() => {
    fetch("http://localhost:3000/adv/cieran") // TODO // delegate to armchar.service
    //fetch('./armchar/assets/adv_cieran.json') // does not work
      .then(response => response.json())
      .then(data => console.log(data));
    }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <LabFormula int={2} theory={4} aura={8} />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
