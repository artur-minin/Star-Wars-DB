import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundary from "../error-boundary";

import {
  PersonList,
  PlanetList,
  StarshipList,
  PersonDetails,
  PlanetDetails,
  StarshipDetails
} from '../sw-components';

import './app.css';


export default class App extends Component {

  render() {
    return (
      <ErrorBoundary>

        <Header />
        <RandomPlanet />

        <PersonList />
        <StarshipList />
        <PlanetList />

        <PersonDetails itemId={2} />
        <StarshipDetails itemId={5} />        
        <PlanetDetails itemId={2} />


      </ErrorBoundary>
    );
  };

};