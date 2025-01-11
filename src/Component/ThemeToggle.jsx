import React from 'react';

const ThemeToggle = ({ isDarkMode, toggleTheme }) => {
    return (
        <button
            onClick={toggleTheme}
            style={{
                position: 'fixed',
                top: '0px',
                right: '0px',
                padding: '10px',
                borderRadius: '10px',
                border: '1px solid #ccc',
                cursor: 'pointer',
                backgroundColor: isDarkMode ? '#333' : '#fff',
                color: isDarkMode ? '#fff' : '#333',
            }}
        >
            {isDarkMode ? '🌙' : '☀️'}
        </button>
    );
};

export default ThemeToggle;