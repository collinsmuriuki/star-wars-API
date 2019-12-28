import React from 'react';

export const Home = props =>  {
    return (
        <div className="intro">
          <h1>Star Wars API</h1>
          <p>
            This is just a simple ReactJS project consuming the Star Wars API; 
            showing details of characters, planets and starships from the Star Wars Universe.
          </p>
          <p>
            The fundamentals of using react-router and react semantic-ui are covered here.
          </p>
          <p>
            Visit the api documentation <a href="https://swapi.co/" target="_blank">here</a>
          </p>
        </div>
    )
}
