import { useState, useCallback, memo, FC } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { useCoordinateContext } from '../../providers/coordinates-provider';

const CONTAINER_STYLE = {
    width: '100%',
    height: '100vh'
};

const CENTER = {
    lat: 37.769722,
    lng: -122.476944,
};

interface GoogleMapsViewProps {
    show: boolean;
}

const GoogleMaps: FC<GoogleMapsViewProps> = ({ show }) => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyCqxqAPlybcdfWGj5SX5kIDG7CmLtPiR58',
    });
    const { setCoords } = useCoordinateContext();
    const [map, setMap] = useState(null);
    const containerStyles = {
        ...CONTAINER_STYLE,
        display: show ? 'block' : 'none',
    }

    const onLoad = useCallback((map) => {
        const bounds = new window.google.maps.LatLngBounds(CENTER);
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
            mapContainerStyle={containerStyles}
            center={CENTER}
            zoom={8}
            onLoad={onLoad}
            onUnmount={onUnmount}
            onMouseUp={onMouseUp}
        />
    )
};

export const MapView = memo(GoogleMaps);
