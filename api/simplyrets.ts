import { useEffect, useState } from 'react';

import { CoordinateContextValue } from '@/pages/listings/providers/coordinates-provider';

const PROPERTIES_ENDPOINT = 'https://api.simplyrets.com/properties';

interface SimplyRetsValue {
    data: Record<string, any> | string | null;
    error: string;
    isLoading: boolean;
}

export const useSimplyRets = (coords: CoordinateContextValue['coords']): SimplyRetsValue => {
    const [data, setData] = useState(null);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const points = `${coords.lat},${coords.lng}`;

    useEffect(() => {
        const simplyRetsCache = localStorage.getItem('simplyrets');
        const fetchData = async () => {
            try {
                // TODO: add coordinates to the api call. For some reason, 
                // I'm getting 0 results from the SimplyRetsAPI everytime no matter what points I use.
                // fetch(`${PROPERTIES_ENDPOINT}?points=${points}`, {

                fetch(PROPERTIES_ENDPOINT, {
                    headers: new Headers({
                        "Authorization": `Basic ${btoa('simplyrets:simplyrets')}`
                    }),
                })
                    .then(res => res.json())
                    .then(response => {
                        setData(response);
                        localStorage.setItem('simplyrets', JSON.stringify(response));
                    })
            } catch (err) {
                setError(err as string);
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };

        // Read from the cache and use that for data
        if (simplyRetsCache) {
            setData(JSON.parse(simplyRetsCache))
            setIsLoading(false);
        } else {
            fetchData();
        }
    }, [points]);

    return {
        data,
        error,
        isLoading,
    }
};
