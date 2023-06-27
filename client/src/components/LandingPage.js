import { useState } from 'react';
import { Link } from 'react-router-dom';
import Map, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

function LandingPage({ parkData, selectedLocation, setSelectedLocation }) {

    // console.log(parkData)

    // const [selectedLocation, setSelectedLocation] = useState(null);

    // console.log(selectedLocation);

    const handleMarkerClick = (park) => setSelectedLocation(park);

    // const handleParkPageClick = () => {
    //     console.log('Go to park page:', selectedLocation.name);
    // };
    
    // const handleStatePageClick = () => {
    //     console.log('See all parks in:', selectedLocation.states);
    // };


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
                            // THIS IS WHAT WAS CAUSING ISSUE OF SETTING SELECTEDLOCATION STATE TO NULL:
                            onClose={() => console.log('cleared')}
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
                                <Link to={`/park/${selectedLocation.parkCode}`}>
                                    Go to {selectedLocation.fullName}'s Page
                                </Link>
                                <br />
                                <Link to={`/state/${selectedLocation.states}`}>
                                    See All Parks in {selectedLocation.states}
                                </Link>
                            </div>
                        </Popup>
                   )} 
                </Map>
            </div>
        </>
    )
}

export default LandingPage;
