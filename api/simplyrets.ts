import { useEffect, useState } from 'react';

import { CoordinateContextValue } from '@/pages/listings/providers/coordinates-provider';

const PROPERTIES_ENDPOINT = 'https://api.simplyrets.com/properties';

interface SimplyRetsValue {
    data: Record<string, any> | null;
    error: string;
    isLoading: boolean;
}

export const useSimplyRets = (coords: CoordinateContextValue['coords']): SimplyRetsValue => {
    const [data, setData] = useState(null);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const points = `${coords.lat},${coords.lng}`;

    useEffect(() => {
        const fetchData = () => {
            try {
                // fetch(`${PROPERTIES_ENDPOINT}?points=${points}`, {
                fetch(PROPERTIES_ENDPOINT, {
                    headers: new Headers({
                        "Authorization": `Basic ${btoa('simplyrets:simplyrets')}`
                    }),
                })
                    .then(res => res.json())
                    .then(response => {
                        setData(response);
                        // localStorage.setItem('simplyrets', response);
                    })
            } catch (err) {
                setError(err as string);
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [points]);

    return {
        data,
        error,
        isLoading,
    }
};
