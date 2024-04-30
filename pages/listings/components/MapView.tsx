import { useState, useCallback, memo } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
    width: '400px',
    height: '400px'
};

const center = {
    lat: -3.745,
    lng: -38.523
};

const GoogleMaps = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyCqxqAPlybcdfWGj5SX5kIDG7CmLtPiR58',
    });

    const [map, setMap] = useState(null);

    const onLoad = useCallback((map) => {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map);
    }, []);

    const onUnmount = useCallback((map) => {
        setMap(null);
    }, []);

    const onMouseUp = (e) => {
        console.log('=== e onMouseUp', e);
        console.log('==== e lat lng', e.latLng.lat())
        console.log('==== e lat lng', e.latLng.lng())
    }

    if (!isLoaded) {
        return null;
    }

    return (
        <GoogleMap 
            mapContainerStyle={containerStyle}
            center={center}
            zoom={5}
            onLoad={onLoad}
            onUnmount={onUnmount}
            onMouseUp={onMouseUp}
        />
    )
};

export const MapView = memo(GoogleMaps);
