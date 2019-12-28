/* eslint-disable no-useless-constructor */
import React, { useState, useEffect } from 'react';
import './App.css';

import { Navbar } from './components/navbar/navbar.component';

const App = () => {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState([true])

  useEffect(() => {
    async function fetchPeople() {
      let result = await fetch('https://swapi.co/api/people/');
      let data = await result.json();
      setPeople(data.results);
    }

    async function fetchPlanets() {
      let result = await fetch('https://swapi.co/api/planets/');
      let data = await result.json();
      setPlanets(data.results);
    }

    fetchPeople();
    fetchPlanets();
  }, [])
    
  return(
    <div className="App">
      <Navbar />
    </div>
  )

}

export default App;
