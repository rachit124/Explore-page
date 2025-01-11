import React, { useEffect, useState } from 'react'
import Card from './Card';
import useFetchData from './useFetchData';
import useFilter from './useFilter';
import ThemeToggle from './ThemeToggle';
import FilterMenu from './FilterMenu';

const Main = () => {
    const { data, fetchData } = useFetchData();
    const { search, setSearch, genderFilter, setGenderFilter, filteredData } = useFilter(data);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [filterMenuOpen, setFilterMenuOpen] = useState(false);
    const [displayCount, setDisplayCount] = useState(30);
    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    const handleScroll = () =>{
        if(window.innerHeight+document.documentElement.scrollTop >= document.documentElement.offsetHeight-100){
            setDisplayCount((prevCount) => prevCount + 30);
        }
        if (displayCount < filteredData.length) {
            setDisplayCount((prevCount) => prevCount + 30);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const removeFilters = () => {
        setGenderFilter(''); 
        setSearch(''); 
        setFilteredData(data);
    };

    const handleSearch = () => {
        const filtered = data.filter(
            (item) =>
                item.name.first.toLowerCase().includes(search.toLowerCase()) ||
                item.name.last.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredData(filtered);
    };


  return (
    <>
        <div className={isDarkMode ? 'dark-mode' : 'light-mode'} style={{ zIndex: 1 }}>
            <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
            <div className="container">
                <div className="searchbar">
                    <input
                        type="text"
                        placeholder="Enter Name"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button onClick={handleSearch}>Search</button>
                </div>
                </div>
                <FilterMenu
                    filterMenuOpen={filterMenuOpen}
                    toggleFilterMenu={() => setFilterMenuOpen(!filterMenuOpen)}
                    handleGenderFilter={setGenderFilter}
                    removeFilters={removeFilters}
                />
            
            <div>
                {filteredData && (
                    <Card detail={filteredData.slice(0, displayCount)} />
                )}
            </div>
        </div>
    </>
  )
}

export default Main