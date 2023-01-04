import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';

import Marker from '../Marker';
import './styles.css';

export default function SimpleMap() {
  const [events] = useState([
    {
      // -4.9685303,-39.017307
      name: 'Qx01',
      description: 'hello',
      latitude: -4.9685303,
      longitude: -39.017307,
    },
    {
      // -4.968554, -39.016205
      name: 'Qx03',
      description: 'world',
      latitude: -4.968554,
      longitude: -39.016205,
    },
    {
      // -4.967661, -39.019072
      name: 'Qx02',
      description: 'js',
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
    <div id="map" style={{ height: '839px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDpBv91kLTLsHY8PK4JpY0R3iwrDWg4-jk' }}
        defaultCenter={prop.center}
        defaultZoom={prop.zoom}
      >
        {events.map((event) => (
          <Marker
            key={event.latitude}
            lat={event.latitude}
            lng={event.longitude}
            place={event}
            text={event.description}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
}
