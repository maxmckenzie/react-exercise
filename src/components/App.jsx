/* eslint react/forbid-prop-types: 0 */
import React from 'react';

function App({ items = [] }) {
  return (
    <div>
      {
        items.map((item, key) =>
          <div className="details">
            <div className="title" key={key}>{item.title}</div>
          </div>
        )
      }
    </div>
  );
}

App.propTypes = {
  items: React.PropTypes.array.isRequired,
};

export default App;
