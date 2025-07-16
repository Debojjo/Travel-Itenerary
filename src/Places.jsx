export default function Places(props) {
  return (
    <div className="japan">
    <img src={props.image} alt="" />  
    <div className="japan-info">
    <div className="first">
      <img src="./marker.svg" className="marker" alt="" />
      <h2>{props.country}</h2>
      <a href={props.googleMapsLink}>View In Google maps</a>
    </div>
    <div className="second">
      {props.placeName}
    </div>
    <div className="third">
      {props.startDate} - {props.endDate}
    </div>
    <div className="fourth">
      <p>{props.description}</p>
    </div>
    </div>
    </div>
  );
}