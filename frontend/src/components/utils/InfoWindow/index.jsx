import React from 'react';

import './styles.css';

export default function InfoWindow({ place, close, setShowModal }) {
  return (
    <div className="info-window">
      <div className="content">
        <span>{place.name}</span>
        <span>{place.description}</span>
        <span>{place.phone}</span>
        <span id="details" onClick={() => setShowModal(true)}>
          {' '}
          View Details
        </span>{' '}
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
