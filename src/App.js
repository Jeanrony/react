import React from 'react';
import './App.css';
import Contacts from './components/Contacts';

function App(props) {
  return (
    <div className="App">

      <Contacts name= "Nami" avatar="https://randomuser.me/api/portraits/women/18.jpg" online={true}/>
      <Contacts name= "Robin" avatar="https://randomuser.me/api/portraits/women/40.jpg" online={false}/>
      <Contacts name= "Rose" avatar="https://randomuser.me/api/portraits/women/21.jpg" online={true}/>
    </div>
  );
}

export default App;
