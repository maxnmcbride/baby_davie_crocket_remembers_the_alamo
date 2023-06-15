import { useState } from 'react';
import { Link } from 'react-router-dom';
import Map, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

function LandingPage({ parkData }) {

    // console.log(parkData)

    const [selectedLocation, setSelectedLocation] = useState(null);

    const handleMarkerClick = (park) => setSelectedLocation(park);

    const handleParkPageClick = (park) => {
        console.log('park page click')
        
    }

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
                            <div style={{textAlign: 'center'}}>
                                <img 
                                    src={selectedLocation.images[0].url}
                                    width= '200px'
                                    height= 'auto'
                                    alt={selectedLocation.fullName}
                                />
                                <h3>{selectedLocation.fullName}</h3>
                                <p>{selectedLocation.description.slice(0,110)}...</p>
                            </div>
                            <div style={{textAlign: 'center'}}>
                                <Link to="/park">{selectedLocation.fullName}'s Page</Link>
                                <br />
                                <Link to="/state">View All {selectedLocation.states} Parks</Link>
                            </div>
                        </Popup>
                    )}
                </Map>
            </div>
        </>
    )
}

export default LandingPage;
