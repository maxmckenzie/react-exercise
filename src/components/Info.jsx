import React from 'react';
import logger from '../helpers/logger';

function Info() {
  let json = require('../schemas/sample.json');
  const items = Object.keys(json).map(x => json[x]);
  logger.info(items);

  return (
    <div className="info">info, info__title, info__description, info__host, info__basse-path</div>
  )
}

export default Info;
