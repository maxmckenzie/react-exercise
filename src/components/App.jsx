/* eslint react/forbid-prop-types: 0 */
import React from 'react';
import logger from '../helpers/logger';
import Info from './Info';
import Paths from './Paths';
import Definitions from './Definitions';

function App({ items = [] }) {
  logger.info(this);
  return (
    <div>
      {
        items.map((item, key) =>
          <div className="info__title" key={key}><h1>{item.title}</h1></div>
        )
      }
      <div>
        <Info/>
        <Paths/>
        <Definitions/>
      </div>
    </div>
  );
}

App.propTypes = {
  items: React.PropTypes.array.isRequired,
};

export default App;
