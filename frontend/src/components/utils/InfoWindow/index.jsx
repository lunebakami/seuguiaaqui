import React from 'react';

import './styles.css';

export default function InfoWindow({ place, close }) {
  return (
    <div className="info-window">
      <div className="content">{place.name}</div>
      <div>
        <span
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
