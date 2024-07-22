import { useState, useEffect } from 'react';

const useJsonFetch = (url, opts) => {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [hasError, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(url);
                if (!response.ok) throw new Error(response.statusText);
                const fetchedData = await response.json();
                setData(fetchedData);
                setError(null);
            } catch (e) {
                setError(e);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [url]);

    return [data, isLoading, hasError];
};

export default useJsonFetch;