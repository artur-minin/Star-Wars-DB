import React from 'react';

import ItemDetails, { Record } from '../item-details';
import { withSwapiService } from '../hoc-helpers';

const PersonDetails = (props) => {
  return (
    <ItemDetails {...props} >
      <Record field="birthYear" label="birth year" />
      <Record field="gender" label="Gender" />
      <Record field="eyeColor" label="Eye Color" />
    </ItemDetails>
  );
};

/* mapMethodsToProps выбирает из swapiService необходимые методы
   и представит их необходимым образом:
   getData - в виде swapiService.getPerson,
   getImageUrl - в виде swapiService.getPersonImage. */
const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPerson,
    getImageUrl: swapiService.getPersonImage
  }
};


// При вызове PersonDetails withSwapiService позаботится о том, чтобы в PersonDetails было св-во swapiService
export default withSwapiService(PersonDetails, mapMethodsToProps);