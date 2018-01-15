import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Routers from './Routers';

ReactDOM.render(
  <Routers />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
