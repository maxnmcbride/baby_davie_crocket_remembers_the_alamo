import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';


function LandingPage() {
    return (
        <>
            <h1>Landing Page</h1>
            <Map
                initialViewState={{
                    latitude: 44.967243,
                    longitude: -103.771556,
                    zoom: 2
                }}
                style={{ width: '100vw', height: '100vh' }}
                mapStyle="mapbox://styles/mapbox/streets-v9"
                mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            >
                <Marker longitude={-103.771556} latitude={44.967243} color="navy" />
            </Map>
        </>
    )
}

export default LandingPage;
