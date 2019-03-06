import React from 'react';
import { StarshipList } from '../sw-components';
import { withRouter } from 'react-router-dom'
// Страница создана с использованием react-router

// Деструктурируем св-во history из компонента withRouter
const StarshipsPage = ({ history }) => {

    return (
      <StarshipList
        onItemSelected={(id) => {
          /* Объект history работает с историей браузера.
             history.push(id) прибавляет путь id в к адресной строке.*/
          history.push(id);
         }}/>
    );

}

/* hoc "withRouter" передаст объекты history, match, location
   в компонент StarshipsPage.*/

export default withRouter(StarshipsPage);
