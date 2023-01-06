import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';

import Marker from '../Marker';
import './styles.css';
import MarkerModal from '../utils/MarkerModal';

export default function SimpleMap() {
  const [showModal, setShowModal] = useState(false);

  // TODO: get markers(enterprises) from api
  const [markers] = useState([
    {
      // -4.9685303,-39.017307
      name: 'Qx01',
      description: 'hello',
      phone: '85991169461',
      latitude: -4.9685303,
      longitude: -39.017307,
    },
    {
      // -4.968554, -39.016205
      name: 'Qx03',
      description: 'world',
      phone: '85991169461',
      latitude: -4.968554,
      longitude: -39.016205,
    },
    {
      // -4.967661, -39.019072
      name: 'Qx02',
      description: 'js',
      phone: '85991169461',
      latitude: -4.967661,
      longitude: -39.019072,
    },
  ]);

  const prop = {
    center: {
      lat: -4.968586,
      lng: -39.016193,
    },
    zoom: 16,
  };

  return (
    // Important! Always set the container height explicitly
    <div id="map" style={{ height: '90vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: import.meta.env.VITE_GOOGLE_MAPS_API_KEY }}
        defaultCenter={prop.center}
        defaultZoom={prop.zoom}
        yesIWantToUseGoogleMapApiInternals
        options={{
          clickableIcons: false,
        }}
      >
        {markers.map((marker) => (
          <>
            <Marker
              key={marker.latitude}
              lat={marker.latitude}
              lng={marker.longitude}
              place={marker}
              text={marker.description}
              setShowModal={setShowModal}
            />
            <MarkerModal
              id={marker.name}
              show={showModal}
              onClose={() => setShowModal(false)}
            />
          </>
        ))}
      </GoogleMapReact>
    </div>
  );
}
