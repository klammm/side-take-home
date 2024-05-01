import { useState, useCallback, memo } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { useCoordinateContext } from '../../providers/coordinates-provider';

const containerStyle = {
    width: '100%',
    height: '100vh'
};

const center = {
    lat: 37.769722,
    lng: -122.476944,
};

const GoogleMaps = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyCqxqAPlybcdfWGj5SX5kIDG7CmLtPiR58',
    });

    const { setCoords } = useCoordinateContext();

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
        const lat = e.latLng.lat()
        const lng = e.latLng.lng()
        setCoords({
            lat,
            lng,
        });
    }

    if (!isLoaded) {
        return null;
    }

    return (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={8}
            onLoad={onLoad}
            onUnmount={onUnmount}
            onMouseUp={onMouseUp}
        />
    )
};

export const MapView = memo(GoogleMaps);
