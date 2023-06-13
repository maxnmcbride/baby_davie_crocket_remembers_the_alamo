import { useState } from 'react';
import Map, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

function LandingPage({ parkData }) {

    const [selectedLocation, setSelectedLocation] = useState(null);

    const handleMarkerClick = (park) => setSelectedLocation(park);

    return (
        <>
            <h1>Landing Page</h1>
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
                            onClick={() => handleMarkerClick(park)}
                            key={park.id}
                            latitude={park.latitude}
                            longitude={park.longitude}
                            color='navy'
                        >
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
                                <img src={selectedLocation.images[0].url}
                                    width= '200px'
                                    height= 'auto'/>
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
