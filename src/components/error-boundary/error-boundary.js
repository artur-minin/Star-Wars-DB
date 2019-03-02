import React, { Component } from 'react';

import ErrorIndicator from '../error-indicator/error-indicator';

/* Компонент ErrorBoundary - компонент-обертка, 
   позволяющий отлавливать и обрабатывать ошибки на любом другом компоненте. */
export default class ErrorBoundary extends Component {

  state = {
    hasError: false
  };

  /* Метод "componentDidCatch" отлавливает ошибки, которые произошли в методе жизненного цикла
     ниже по иерархии.
     Принимает 2 параметра:
      error - какая ошибка привела к вызову componentDidCatch,
      info - детали того в каком компоненте ошибка произошла. 
     Не обрабатывает ошибки в even listener'ах и асинхронном коде. */
  componentDidCatch(error, info) {
    this.setState({
      hasError: true
    });
  }

  render() {

  // Если происходит ошибка, то выводится уведомление для пользователя
    if (this.state.hasError) {
      return <ErrorIndicator />
    }
  
  // Иначе возвращает то, что он обоврачивает(props.children)
    return this.props.children;
  }

}
