import { useState, useEffect, useCallback } from "react";
import axios from "axios";

function useFetch(query, page, url) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [list, setList] = useState([]);

    const sendQuery = useCallback(async () => {
        try {
            setLoading(true);
            setError(false);
            const res = await axios.get(url);
            setList((prev) => [...prev, ...res.data.data]);
            setLoading(false);
        } catch (err) {
            setError(err);
        }
    }, [query, page, url]);

    useEffect(() => {
        sendQuery(query);
    }, [query, sendQuery, page]);

    return { loading, error, list };
}

export default useFetch;
