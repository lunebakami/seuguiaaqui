import React from 'react';

import './styles.css';

export default function InfoWindow({ place, close }) {
  return (
    <div className="info-window">
      <div className="content">
        <span>{place.name}</span>
        <span>{place.description}</span>
        <span>{place.phone}</span>
        <span>View Details</span> {/** TODO: Modal with more details */}
      </div>
      <div>
        <span
          id="close"
          onClick={() => {
            close();
          }}
        >
          x
        </span>
      </div>
    </div>
  );
}
