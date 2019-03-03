import React from 'react';

import ItemDetails, { Record } from '../item-details';
import { withSwapiService } from '../hoc-helpers';

const StarshipDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record field="model" label="Model" />
      <Record field="length" label="Length" />
      <Record field="costInCredits" label="Cost" />
    </ItemDetails>
  );
};

/* mapMethodsToProps выбирает из swapiService необходимые методы
   и представит их необходимым образом:
   getData - в виде swapiService.getStarship,
   getImageUrl - в виде swapiService.getStarshipImage. */
const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getStarship,
    getImageUrl: swapiService.getStarshipImage
  };
};


// При вызове PersonDetails withSwapiService позаботится о том, чтобы в StarshipDetails было св-во swapiService
export default withSwapiService(StarshipDetails, mapMethodsToProps);

