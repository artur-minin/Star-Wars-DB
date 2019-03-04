import React from 'react';
import { SwapiServiceConsumer } from '../swapi-service-context';

/* withSwapiService - функция, возвращающая функцию.
                      В первую функцию передаем параметр, отвечающий за выбор метода для отбора данных(mapMethodsToProps).
                      Во вторую функцию передаем элемент в который эти данные будут передаваться. */
const withSwapiService = (mapMethodsToProps) => (Wrapped) => {

  return (props) => {
    return (
       // Consumer - принимает в кач-ве параметра только функцию из которой получает необходимые св-ва из Provider
      <SwapiServiceConsumer>
        {
          (swapiService) => {
            const serviceProps = mapMethodsToProps(swapiService);

            return (
              <Wrapped {...props} {...serviceProps} />
            );
          }
        }
      </SwapiServiceConsumer>
    );
  }

};

export default withSwapiService;