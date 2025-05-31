import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { AuthorizationStatus } from './const';
import { store } from './store'; // при этом импорте происходит инциализация стора, выполняется конфигуреСтор и редьюсер. Автодиспатч, стор с нач состоянием

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App authorizationStatus={AuthorizationStatus.Auth}/>
    </Provider>
  </React.StrictMode>
);
