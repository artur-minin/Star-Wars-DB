import React from 'react';

import ItemList from '../item-list';
import { withData } from '../hoc-helpers';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();

const {
  getAllPeople,
  getAllPlanets,
  getAllStarships
} = swapiService;


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

/* Вызываем функцию-обертку(withData) для каждого комопнента, 
   которая отвечает за работу с данными компонента. */
const PersonList = withData(
  withChildFunction(ItemList, renderName),
  getAllPeople);

const PlanetList = withData(
  withChildFunction(ItemList, renderName),
  getAllPlanets);

const StarshipList = withData(
  withChildFunction(ItemList, renderModelAndName),
  getAllStarships);


// Экспорт
export {
  PersonList,
  PlanetList,
  StarshipList
}