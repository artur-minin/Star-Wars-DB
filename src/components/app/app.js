import React, { Component } from 'react';

import { SwapiServiceProvider } from '../swapi-service-context';
import SwapiService from '../../services/swapi-service';

import ErrorBoundary from "../error-boundary";
import Header from '../header';
import RandomPlanet from '../random-planet';
import {
  PeoplePage,
  StarshipsPage,
  PlanetsPage
} from '../pages';

import './app.css';


export default class App extends Component {

  swapiService = new SwapiService();

  render() {
    return (
      <ErrorBoundary>
        <SwapiServiceProvider value = {this.swapiService}>
        
          <Header />
          <RandomPlanet />

          <PeoplePage />
          <StarshipsPage />
          <PlanetsPage />
          
        </SwapiServiceProvider>
      </ErrorBoundary>
    );
  };

};