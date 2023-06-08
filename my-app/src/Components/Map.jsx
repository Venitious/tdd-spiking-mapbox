import React from "react";
import { MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import { Icon } from "leaflet";
 
export const Map = () => {
  const position2 = [51.4934, 0.0098]; // [latitude, longitude]
  const zoomLevel = 13;

  const position = [51.50805832397229, -0.1280274575807878]
  const eggPosition = new Icon ({
    iconUrl: "/easter.png",
    iconSize: [30, 125],
    iconAnchor: [40, 90],
    popupAnchor: [-25, -40]
  })
 

  

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
      <Marker position={position} icon={eggPosition}>
        <Popup>
          "Beautiful town centre"
        </Popup>
      </Marker>
      <Marker position={position2}>
        <Popup>
        "Make a wish, but do not take a drink"
        </Popup>
      </Marker>
    </MapContainer>
  );
};