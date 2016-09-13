import React from 'react';
import logger from '../helpers/logger';

function Paths({ paths = [] }) {
  logger.info(paths);
  const items = Object.keys(paths).map(x => paths[x]);
  // return (
  //   <div className="paths">paths, paths__url, paths__method, paths__description, paths__parameters, paths__responce, paths__tags</div>
  // )
}

export default Paths;
