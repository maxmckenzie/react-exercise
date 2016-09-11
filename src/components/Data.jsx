/* eslint react/forbid-prop-types: 0 */
import React from 'react';

function Data({ items = [] }) {
  return (
    <div>
      {
        items.map((item, key) =>
          <div className="item" key={key}>{item.title}</div>
        )
      }
    </div>
  );
}

Data.propTypes = {
  items: React.PropTypes.array.isRequired,
};

export default Data;
