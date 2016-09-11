import React from 'react';
import ReactDOM from 'react-dom';
import Data from './components/Data.jsx';
import logger from './helpers/logger';

let json = require('./schemas/sample.json');

const items = Object.keys(json).map(x => json[x])

logger.info(items);

ReactDOM.render(
  <Data items={items} />,
  document.getElementById('app')
);
