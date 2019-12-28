/* eslint-disable no-useless-constructor */
import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Dimmer, Loader } from 'semantic-ui-react';


import { Navbar } from './components/navbar/navbar.component';
import { Home } from './components/home/home.component';
import { People } from './components/people/people.component';
import { Planets } from './components/planets/planets.component';

const App = () => {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
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

    fetchPeople();
    fetchPlanets();
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
              <People />
            </Route>
            <Route exact path='/planets'>
              <Planets />
            </Route>
          </Switch>
          )}
        </Container>
      </Router>
    </>
  )

}

export default App;
