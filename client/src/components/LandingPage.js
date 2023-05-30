import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

function LandingPage({ parkData }) {

    console.log("landing page:", parkData)

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
                            key={park.id}
                            latitude={park.latitude}
                            longitude={park.longitude}
                            color='navy'
                        />
                    ))}
                </Map>
            </div>
        </>
    )
}

export default LandingPage;
