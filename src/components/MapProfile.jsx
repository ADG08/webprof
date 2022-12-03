import img from "../images/img.jpg"
import "./MapProfile.css"

function MapProfile() {
  return (
    <div className="mapProfile">
      <a href="">
        <img src={img} alt="" />
        <h1 className="nom">Cristèle</h1>
        <p className="description">Enseignante en expression française expérimentée donne cours de français tous niveaux. pédagogie individualisée et efficace.</p>
        <p className="tarif">75€/h</p>
      </a>
    </div>
  );
}

export default MapProfile;
