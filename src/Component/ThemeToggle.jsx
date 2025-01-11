import React from 'react';

const ThemeToggle = ({ isDarkMode, toggleTheme }) => {
    return (
        <button
            onClick={toggleTheme}
            style={{
                position: 'fixed',
                top: '20px',
                right: '20px',
                padding: '10px',
                borderRadius: '5px',
                border: 'none',
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