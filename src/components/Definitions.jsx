import React from 'react';
import logger from '../helpers/logger';

function Definitions({ definitions = [] }) {
  // logger.info(definitions);
  return (
    <div>
      {definitions.toString()}
    </div>
  );
}

export default Definitions;
