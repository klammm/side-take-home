import { FC, useEffect, useState } from 'react';

const PROPERTIES_ENDPOINT = 'https://api.simplyrets.com/properties';

export const useSimplyRets = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = () => {
            try {
                fetch(PROPERTIES_ENDPOINT, {
                    headers: new Headers({
                        "Authorization": `Basic ${btoa('simplyrets:simplyrets') }`
                    }),
                })
                .then(res => res.json())
                .then(response => {
                    setData(response);
                    localStorage.setItem('simplyrets', response);
                })
            } catch(err) {
                setError(err as string);
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return {
        data,
        error,
        isLoading,
    }
};
