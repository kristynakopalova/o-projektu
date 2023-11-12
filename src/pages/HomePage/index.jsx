import './style.css';
import { OProjektu } from './components/o-projektu';
import { OKristyne } from './components/o-kristyne';
import { OPaji } from './components/o-paji';
import { useState } from 'react';

export const HomePage = () => {
  const [selectedComponent, setSelectedComponent] = useState(OProjektu);
  return (
    <>
      <div className='navbar'>
        <h1 className='navbar__heading'>Svatební itinerář</h1> 
        <div className='navbar__buttons'>
          <div className='navbar__button'>
            <button onClick={() => setSelectedComponent(OProjektu)}>
              O projektu
            </button>
          </div>
          <div className='navbar__button'>
            <button onClick={() => setSelectedComponent(OPaji)}>
              Pavla Taterová
            </button>
          </div>
          <div className='navbar__button'>
            <button onClick={() => setSelectedComponent(OKristyne)}>
              Kristýna Kopalová
            </button>
          </div>
        </div>
      </div>
      {selectedComponent}
    </>
  );
};
