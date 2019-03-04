import React from 'react';

import ItemDetails, { Record } from '../item-details';
import { withSwapiService } from '../hoc-helpers';

const PlanetDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record field="population" label="Population" />
      <Record field="rotationPeriod" label="Rotation period" />
      <Record field="diameter" label="Diameter" />
    </ItemDetails>
  );
};

/* mapMethodsToProps выбирает из swapiService необходимые методы
   и представит их необходимым образом:
   getData - в виде swapiService.getPlanet,
   getImageUrl - в виде swapiService.gePlanetImage. */
const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPlanet,
    getImageUrl: swapiService.getPlanetImage
  };
};


// При вызове PersonDetails withSwapiService позаботится о том, чтобы в PlanetDetails было св-во swapiService
export default withSwapiService(mapMethodsToProps)(PlanetDetails);

