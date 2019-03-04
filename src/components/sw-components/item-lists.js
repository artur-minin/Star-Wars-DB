import React from 'react';

import ItemList from '../item-list';
import { withData, withSwapiService } from '../hoc-helpers';
import { withChildFunction, compose } from '../hoc-helpers';

// Функции "renderName" и "rendermodeAndName" - функции рендеринга для функции withChildFunction
const renderName = ({ name }) => <span>{name}</span>;
const renderModelAndName = ({ model, name }) => <span>{name} ({model})</span>;

/* Функции mapPerson(Planet,Starship)ToProps выбирают необходимый метод для getData, 
   который деструктурируется из swapiService. */
const mapPersonMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople
  };
};

const mapPlanetMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets
  };
};

const mapStarshipMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarships
  };
};


/* Функциям withSpwapiService, withData, withChildFunction
   поочереди передается аргумент ItemList и каждая функция получает результат предыдущей:
   withSwapiService(whithData(WithChildFunction(ItemList))) - в виде упрощенного примера. */
const PersonList = compose (
                        withSwapiService(mapPersonMethodsToProps),
                        withData,
                        withChildFunction(renderName),
                      )(ItemList);

const PlanetList = compose(
                        withSwapiService(mapPlanetMethodsToProps),
                        withData,
                        withChildFunction(renderName),
                      )(ItemList);

const StarshipList = compose(
                        withSwapiService(mapPersonMethodsToProps),
                        withData,
                        withChildFunction(renderModelAndName),
                      )(ItemList);


// Экспорт
export {
  PersonList,
  PlanetList,
  StarshipList
}