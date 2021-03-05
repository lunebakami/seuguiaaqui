import React, { useState } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

const MapContainer = ({ google }) => {
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

  const [showInfoWindow, setShowInfoWindow] = useState(true);
  const [activeMarker, setActiveMarker] = useState({});
  const [selectedPlace, setSelectedPlace] = useState({});

  const mapStyles = {
    width: '100%',
    height: '100%',
  };

  function infoWindowHandler(props, marker) {
    setSelectedPlace(props);
    setActiveMarker(marker);
    setShowInfoWindow(true);
  }

  function onCloseWindow() {
    setShowInfoWindow(false);
    setActiveMarker(null);
  }

  function displayMarkers() {
    return events.map((event, index) => (
      <Marker
        id={index}
        position={{
          lat: event.latitude,
          lng: event.longitude,
        }}
        name={event.name}
        description={event.description}
        onClick={(props, marker) => {
          infoWindowHandler(props, marker);
        }}
      />
    ));
  }

  return (
    <Map
      google={google}
      zoom={16}
      style={mapStyles}
      initialCenter={{ lat: -4.968586, lng: -39.016193 }} // -4.968586, -39.016193
    >
      {displayMarkers()}
      <InfoWindow
        marker={activeMarker}
        visible={showInfoWindow}
        onClose={onCloseWindow}
      >
        <div>
          <h4>{selectedPlace.name}</h4>
          <h4>{selectedPlace.description}</h4>
        </div>
      </InfoWindow>
    </Map>
  );
};
export default GoogleApiWrapper({
  apiKey: 'AIzaSyDpBv91kLTLsHY8PK4JpY0R3iwrDWg4-jk',
})(MapContainer);
