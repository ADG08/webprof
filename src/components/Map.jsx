import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import img from "../images/img.webp"

function Map() {
  return (
    <MapContainer className="map" center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          <img src={img} alt="" />
          <h1>Nom</h1>
          <p>description...</p>
          <a href="">Voir le profilc</a>
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
