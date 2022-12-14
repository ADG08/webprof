import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "./Map.css"
import MapProfile from "./MapProfile";

function Map() {
  return (
    <MapContainer className="map" center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          <MapProfile />
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
