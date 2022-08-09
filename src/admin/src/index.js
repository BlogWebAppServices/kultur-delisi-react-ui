import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Admin from './Admin';
import { ContextProvider } from './contexts/ContextProvider';

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <Admin />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
