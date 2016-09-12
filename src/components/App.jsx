/* eslint react/forbid-prop-types: 0 */
import React from 'react';
import logger from '../helpers/logger';
import Info from './Info';
import Paths from './Paths';
import Definitions from './Definitions';

function App({ items = [] }) {
  return (
    <div>
      <div>
        <Info info={items[1]}/>
        <Paths paths={items[6]}/>
        <Definitions definitions={items[7]}/>
      </div>
    </div>
  );
}

App.propTypes = {
  items: React.PropTypes.array.isRequired,
};

export default App;
