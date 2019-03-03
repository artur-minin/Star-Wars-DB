import React from 'react';

/* Context в React позволяет передавать данные напрямую к конкретному компоненту
   не "пронизывая" этими данными всю иерархию компонентов. */
const {
  Provider: SwapiServiceProvider,
  Consumer: SwapiServiceConsumer
} = React.createContext();

/* createContext имеет 2 параметра:
    Provider - отвечает за данные, которые будут передаваться в Consumer.
    Consumer - располагается в том компоненте куда необходимо передать данные из Provider.
    Consumer берет данные из ближайшего Provider. */

export {
  SwapiServiceProvider,
  SwapiServiceConsumer
}