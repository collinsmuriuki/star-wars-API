/* eslint-disable no-useless-constructor */
import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Dimmer, Loader } from 'semantic-ui-react';


import { Navbar } from './components/navbar/navbar.component';
import { Home } from './components/home/home.component';
import { People } from './components/people/people.component';
import { Planets } from './components/planets/planets.component';
import { Starships } from './components/starships/starships.component';

const App = () => {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState([true])

  useEffect(() => {
    async function fetchPeople() {
      let result = await fetch('https://swapi.co/api/people/');
      let data = await result.json();
      setPeople(data.results);
      setLoading(false)
    }

    async function fetchPlanets() {
      let result = await fetch('https://swapi.co/api/planets/');
      let data = await result.json();
      setPlanets(data.results);
      setLoading(false)
    }

    async function fetchStarships() {
      let result = await fetch('https://swapi.co/api/starships/');
      let data = await result.json();
      setStarships(data.results);
      setLoading(false)
    }

    fetchPeople();
    fetchPlanets();
    fetchStarships();
  }, [])
    
  return(
    <>
      <Router>
        <Navbar />
        <Container>
          {loading ? (
            <Dimmer active inverted>
              <Loader inverted>Loading</Loader>
            </Dimmer>
          ): (
            <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/people'>
              <People data={people} />
            </Route>
            <Route exact path='/planets'>
              <Planets data={planets} />
            </Route>
            <Route exact path='/starships'>
              <Starships data={starships} />
            </Route>
          </Switch>
          )}
        </Container>
      </Router>
    </>
  )

}

export default App;
