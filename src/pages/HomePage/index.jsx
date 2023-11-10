import './style.css';
import { OProjektu } from './components/o-projektu';
import { OKristyne } from './components/o-kristyne';
import { OPaji } from './components/o-paji';
import { useState } from 'react';

export const HomePage = () => {
  const [selectedComponent, setSelectedComponent] = useState(OProjektu);
  return (
    <>
      <ul>
        <li>
          <button onClick={() => setSelectedComponent(OProjektu)}>
            O projektu
          </button>
        </li>
        <li>
          <button onClick={() => setSelectedComponent(OPaji)}>
            Pavla Taterová
          </button>
        </li>
        <li>
          <button onClick={() => setSelectedComponent(OKristyne)}>
            Kristýna Kopalová
          </button>
        </li>
      </ul>
      {selectedComponent}
    </>
  );
};
