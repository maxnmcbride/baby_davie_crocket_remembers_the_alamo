import { useState } from 'react';
import Map, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

function LandingPage({ parkData }) {

    const [selectedLocation, setSelectedLocation] = useState();

    const handleMarkerClick = (park) => {
        setSelectedLocation(park);
    };

    console.log("selected bs:", selectedLocation)

    return (
        <>
            <h1>Landing Page</h1>
            <form> 
                <label for="states">Choose State:</label>
                <select id="states" name="states">
                    <option value="AL">AL</option>
                    <option value="AK">AK</option>
                    <option value="AZ">AZ</option>
                    <option value="AR">AR</option>
                </select>
            </form>
            <div className="map-container">
                <Map
                    id="map"
                    className="map"
                    initialViewState={{
                        latitude: 44.967243,
                        longitude: -103.771556,
                        zoom: 2
                    }}
                    style={{ width: '100vw', height: '100vh' }}
                    mapStyle="mapbox://styles/mapbox/outdoors-v12"
                    mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                >
                    {parkData.map((park) => park.designation !== 'National Park' ? null : (
                        <Marker
                            key={park.id}
                            latitude={park.latitude}
                            longitude={park.longitude}
                        >
                            <button
                                className="marker-btn"
                                onClick={() => handleMarkerClick(park)}
                            >
                                <img src="marker-icon.png" alt={park.name}/>
                            </button>
                        </Marker>
                    ))}
                    {selectedLocation && (
                        <Popup
                            latitude={selectedLocation.latitude}
                            longitude={selectedLocation.longitude}
                            onClose={() => setSelectedLocation(null)}
                            closeOnClick={false}
                        >
                            <div>
                                <img src={selectedLocation.images[0].url}/>
                                <h3>{selectedLocation.fullName}</h3>
                                <p>{selectedLocation.description}</p>
                            </div>
                        </Popup>
                    )}
                </Map>
            </div>
        </>
    )
}

export default LandingPage;
