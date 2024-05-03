import { useState, useCallback, memo, FC } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { useCoordinateContext } from '../../providers/coordinates-provider';

import * as S from './MapView-styled';

const CONTAINER_STYLE = {
    width: '100%',
    height: '100vh'
};

const CENTER = {
    lat: 37.7697,
    lng: -122.4769,
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
        <S.MapViewContainer $show={show}>
            <GoogleMap
                mapContainerStyle={CONTAINER_STYLE}
                center={CENTER}
                zoom={8}
                onLoad={onLoad}
                onUnmount={onUnmount}
                onMouseUp={onMouseUp}
            />
        </S.MapViewContainer>
    )
};

export const MapView = memo(GoogleMaps);
