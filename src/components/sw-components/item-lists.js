import React from 'react';

import ItemList from '../item-list';
import { withData, withSwapiService } from '../hoc-helpers';


/* Функция "withChildFunction" берет любой компонент(Wrapped)
   и устанавливает качестве child функцию fn. */
const withChildFunction = (Wrapped, fn) => {
  return (props) => {
    // props передается в ItemList в качестве аргумента
    return (
      <Wrapped {...props}>
        {fn}
      </Wrapped>
    )
  };
};

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


/* Вызываем функцию(withSwapiService) для каждого компонента, 
   которая передает необходимый метод из SwapiService через mapMETHODToProps.
   Далее этот метод функция withData получает через this.props.getData(), 
   которая, в свою очередь, передает эти данные в компонент, где они будут отрендерены нужным образом. */
const PersonList = withSwapiService(
  withData(
    withChildFunction(ItemList, renderName)),
  mapPersonMethodsToProps);

const PlanetList = withSwapiService(
  withData(
    withChildFunction(ItemList, renderName)),
  mapPlanetMethodsToProps);

const StarshipList = withSwapiService(
  withData(
    withChildFunction(ItemList, renderModelAndName)),
  mapStarshipMethodsToProps);


// Экспорт
export {
  PersonList,
  PlanetList,
  StarshipList
}