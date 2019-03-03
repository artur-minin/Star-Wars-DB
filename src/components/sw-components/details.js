import React from 'react';

import ItemDetails, { Record } from '../item-details';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();

const {
  getPerson,
  getPlanet,
  getStarship,
  getPersonImage,
  getPlanetImage,
  getStarshipImage
} = swapiService;


/* Для каждого из компонентов создаем отдельную функцию, 
   которая возвращает элемент с характерными для него полями. */
const PersonDetails = ({ itemId }) => {
  return (
    <ItemDetails
      itemId = { itemId }
      getData = { getPerson }
      getImageUrl = { getPersonImage }>
      <Record field = "birthYear" label = "birth year" />
      <Record field = "gender" label = "Gender" />
      <Record field = "eyeColor" label = "Eye Color" />
    </ItemDetails>
  );
};

const PlanetDetails = ({ itemId }) => {
  return (
    <ItemDetails
      itemId = { itemId }
      getData = { getPlanet }
      getImageUrl = { getPlanetImage }>
      <Record field = "population" label = "Population" />
      <Record field = "rotationPeriod" label = "Rotation period" />
      <Record field = "diameter" label = "Diameter" />
    </ItemDetails>
  );
}

const StarshipDetails = ({ itemId }) => {
  return (
    <ItemDetails
      itemId = { itemId }
      getData = { getStarship }
      getImageUrl = { getStarshipImage }>
      <Record field = "model" label=  "Model" />
      <Record field = "length" label = "Length" />
      <Record field = "costInCredits" label = "Cost" />
    </ItemDetails>
  );
};

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails
}