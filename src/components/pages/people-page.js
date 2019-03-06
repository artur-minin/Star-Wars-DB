import React from 'react';
import { withRouter } from 'react-router-dom';
import { PersonDetails, PersonList } from '../sw-components';
import Row from '../row';
// Страница создана с использованием react-router

// Деструктурируем св-ва history и match из компонента withRouter
const PeoplePage = ({ history, match }) => {

  const { id } = match.params;

  return (
    <Row
      /* Объект history работает с историей браузера.
         history.push(id) прибавляет путь id в к адресной строке.*/
      left = {<PersonList onItemSelected = { (id) => history.push(id) } />}
      right = {<PersonDetails itemId = { id } />} />
  );
};

export default withRouter(PeoplePage);