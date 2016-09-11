import React from 'react';
import ReactDOM from 'react-dom';
import Data from './components/Data.jsx';
import parser from './helpers/Parser';
import logger from './helpers/logger';

const url = 'http://raw.githubusercontent.com/OAI/OpenAPI-Specification/master/examples/v2.0/json/api-with-examples.json';

// logger.info(parser(url));

const items = [
  {
    title: 'Some Thing',
  },
  {
    title: 'Some other thing',
  },
];

ReactDOM.render(
  <Data items={items} />,
  document.getElementById('app')
);
