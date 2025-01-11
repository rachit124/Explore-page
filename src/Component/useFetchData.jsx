import { useEffect, useState } from 'react';

const useFetchData = () => {
    const [data, setData] = useState([]);

    const fetchData = async (query = '') => {
        const response = await fetch(`https://randomuser.me/api/?results=500&gender=${query}`);
        const jsonData = await response.json();
        setData(jsonData.results);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return { data, fetchData };
};

export default useFetchData;