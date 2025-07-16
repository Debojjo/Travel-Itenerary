import "./App.css";
import Header from "./Header.jsx";
import Places from "./Places.jsx";
import PLaceData from "./placedesc.js"; 

function App() {
  const placeElements = PLaceData.map((place) => {
    return (
      <Places
        key={place.placeName}
        image={place.image}
        country={place.country}
        googleMapsLink={place.googleMapsLink}
        placeName={place.placeName}
        startDate={place.startDate}
        endDate={place.endDate}
        description={place.description}
      />
    );
  });
  return (
    <>
      <Header />
      {placeElements}
    </>
  );
}

export default App;
