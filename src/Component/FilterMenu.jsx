import React from 'react';

const FilterMenu = ({ filterMenuOpen, toggleFilterMenu, handleGenderFilter, removeFilters }) => {
    return (
        <div className="filter-menu">
            <button onClick={toggleFilterMenu}>
                <i className="filter-menu-icon" onClick={toggleFilterMenu}>
                    &#9776;
                </i>
            </button>
            {filterMenuOpen && (
                <div className="filter-options">
                    <ul>
                        <li>
                            <button onClick={() => handleGenderFilter('male')}>Male</button>
                        </li>
                        <li>
                            <button onClick={() => handleGenderFilter('female')}>Female</button>
                        </li>
                        <li>
                            <button onClick={removeFilters}>Remove Filters</button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default FilterMenu;