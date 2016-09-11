import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import logger from './helpers/logger';

let json = require('./schemas/sample.json');
const items = Object.keys(json).map(x => json[x]);

logger.info(items);

ReactDOM.render(
  <App items={items} />,
  document.getElementById('app')
);
