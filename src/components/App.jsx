/* eslint react/forbid-prop-types: 0 */
import React from 'react';

function App({ items = [] }) {
  return (
    <div>
      {
        items.map((item, key) =>
          <div className="info__title" key={key}>{item.title}</div>
        )
      }
    </div>
  );
}

App.propTypes = {
  items: React.PropTypes.array.isRequired,
};

export default App;
