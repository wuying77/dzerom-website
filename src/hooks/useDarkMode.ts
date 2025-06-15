import { useState, useEffect } from 'react';

export function useDarkMode() {
  const [isDark, setIsDark] = useState(() => {
    const savedMode = localStorage.getItem('cosmic-theme');
    return savedMode ? savedMode === 'dark' : true;
  });

  useEffect(() => {
    localStorage.setItem('cosmic-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return {
    isDark,
    toggleDarkMode
  };
}
