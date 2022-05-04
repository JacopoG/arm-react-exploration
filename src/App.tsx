import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { LabFormula } from './components/LabFormula';
import { AdvancementList } from './components/AdvancementList'

import { ArmcharService } from './armchar/armchar.service';
import { Advancement } from './armchar/classes/advancement';


function App() {

  let [advs    , setAdvs   ] = useState(); // how to force type here?
  let [virtues , setVirtues] = useState(); // how to force type here?
  let [flaws   , setFlaws  ] = useState(); // how to force type here?
  let [persTraits   , setPersTraits  ] = useState(); // how to force type here?

  const getAdvancements = async () => {
    const res:Advancement[] = await ArmcharService.getAdvancements();
    setAdvs(res as any);

    //ArmcharService.getPregameAdvancements();
  };

  const getVirtues = async () => {
    const virtues = await ArmcharService.getVirtues(1217, "Summer");
    setVirtues(virtues as any);
  };

  const getFlaws = async () => {
    const flaws = await ArmcharService.getFlaws(1217, "Summer");
    setFlaws(flaws as any);
  };

  const getPersonalityTraits = async () => {
    const persTraits = await ArmcharService.getPersonalityTraits(1217, "Summer");
    setFlaws(persTraits as any);
  };

  useEffect(() => {
    //getAdvancements();
    getVirtues();
    getFlaws();
    getPersonalityTraits();
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        { advs && 
          <AdvancementList advs={ advs }/>
        }

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
