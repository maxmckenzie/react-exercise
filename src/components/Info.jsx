import React from 'react';
import logger from '../helpers/logger';

function Info({ info = [] }) {
  const props = {};
  
  const array = Object.keys(info).map(x => info[x]);

  props.title = array[0]
  props.description = array[1]
  props.version = array[2]

  return (
    <div className="info">
      <h1 className="info__title">{props.title}</h1>
      <p className="info__description">{props.description}</p>
      <span className="info__version">API Version: {props.version}</span>
    </div>
  );
}

export default Info;
