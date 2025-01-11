import { useState, useEffect } from 'react';

const useFilter = (data) => {
    const [search, setSearch] = useState('');
    const [genderFilter, setGenderFilter] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        let filtered = data;

        if (search) {
            filtered = filtered.filter(
                (item) =>
                    item.name.first.toLowerCase().includes(search.toLowerCase()) ||
                    item.name.last.toLowerCase().includes(search.toLowerCase())
            );
        }

        if (genderFilter) {
            filtered = filtered.filter((item) => item.gender === genderFilter);
        }

        setFilteredData(filtered);
    }, [search, genderFilter, data]);

    return { search, setSearch, genderFilter, setGenderFilter, filteredData };
};

export default useFilter;