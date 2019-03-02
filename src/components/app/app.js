import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
import Row from '../row';
import ItemDetails, { Record } from "../item-details";
import ErrorBoundary from "../error-boundary";

import SwapiService from '../../services/swapi-service';
import './app.css';


export default class App extends Component {

  swapiService = new SwapiService();

  state = {};  

  render() {

    const { getPerson,
            getPlanet,
            getStarship,
            getPersonImage,
            getPlanetImage,
            getStarshipImage } = this.swapiService;

    const personDetails = (
      <ItemDetails
        itemId={5}
        getData={getPerson}
        getImageUrl={getPersonImage}>
        <Record field="birthYear" label="birth year" />
        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye Color" />
      </ItemDetails>
    )

    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={getStarship}
        getImageUrl={getStarshipImage}>
        <Record field="model" label="Model" />
        <Record field="length" label="Length" />
        <Record field="costInCredits" label="Cost" />
      </ItemDetails>
    )

    const planetDetails = (
      <ItemDetails
        itemId={5}
        getData={getPlanet}
        getImageUrl={getPlanetImage}>
        <Record field="population" label="Population" />
        <Record field="rotationPeriod"  label="Rotation period" />
        <Record field="diameter" label="Diameter" />
      </ItemDetails>
    )

    return (
      <ErrorBoundary>
          <Row left = {starshipDetails} right = {personDetails} />    
      </ErrorBoundary>
    );
  };

};