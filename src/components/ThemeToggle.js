// src/components/ThemeToggle.js
import React from 'react';
import './ThemeToggle.css';

const ThemeToggle = ({ toggleTheme, isDarkMode }) => {
  return (
    <label className="theme-toggle">
      <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
      <span className="slider" />
    </label>
  );
};

export default ThemeToggle;
