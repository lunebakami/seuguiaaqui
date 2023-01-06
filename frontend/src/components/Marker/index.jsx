import React, { useCallback, useState } from 'react';
import RoomIcon from '@material-ui/icons/RoomTwoTone';
import InfoWindow from '../utils/InfoWindow';

import './styles.css';

function Marker({ place, setShowModal }) {
  const [show, setShow] = useState(false);

  const closeInfoWindow = useCallback(() => {
    setShow(false);
  }, [show]);

  return (
    <>
      <RoomIcon
        onClick={() => {
          setShow(true);
        }}
        style={{ fontSize: 45 }}
        className="marker-icon"
      />
      {show && (
        <InfoWindow
          place={place}
          close={closeInfoWindow}
          setShowModal={setShowModal}
        />
      )}
    </>
  );
}

export default Marker;
