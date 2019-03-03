import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundary from "../error-boundary";
import { SwapiServiceProvider } from '../swapi-service-context';

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

  swapiService = new SwapiService();

  render() {
    return (
      <ErrorBoundary>
        <SwapiServiceProvider value = {this.swapiService}>
          <Header />
          <RandomPlanet />

          <PersonList />
          <StarshipList />
          <PlanetList />

          <PersonDetails itemId={2} />
          <StarshipDetails itemId={5} />        
          <PlanetDetails itemId={2} />
        </SwapiServiceProvider>
      </ErrorBoundary>
    );
  };

};