import React from 'react';

import './styles.css';

export default function MarkerModal({ onClose, show, id }) {
  if (!show) {
    return null;
  }

  // TODO: Retrieve data from API using id

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <span>
            <h3>DETAILS</h3>
          </span>
          <button id="btn-close" onClick={onClose}>
            X
          </button>
        </div>
        <div className="modal-body">{id}</div>
        <div className="modal-footer" />
      </div>
    </div>
  );
}
