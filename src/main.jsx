import React from 'react';
import ReactDOM from 'react-dom';
import Data from './components/Data.jsx';
import logger from './helpers/logger';

let items = require('./schemas/sample.json');

Object.keys(items).map(x => items[x])

logger.info(items);

ReactDOM.render(
  <Data items={items} />,
  document.getElementById('app')
);
