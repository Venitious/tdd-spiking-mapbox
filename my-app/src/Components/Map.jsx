import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
 
export const Map = () => {
  const position = [51.4934, 0.0098]; // [latitude, longitude]
  const zoomLevel = 13;
 
  

  return (
    <MapContainer 
        center={position} 
        zoom={zoomLevel} 
        scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
    </MapContainer>
  );
};