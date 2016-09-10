import React from 'react';

function Data({ items = [] }) {
  return (
    <div>
      {
        items.map((item, key) => {
          return <div className="item" key={key}>{item.title}</div>;
        })
      }
    </div>
  );
}

export default Data;
