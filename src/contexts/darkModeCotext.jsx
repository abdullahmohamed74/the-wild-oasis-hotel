import { createContext, useEffect } from 'react';
import { useLocalStorageState } from './../hooks/useLocalStorageState';

const DarkModeContext = createContext();

function DarkModePovider({ children }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(
    // set the "user prfered mode" as inital value of "isDarkMode" state
    window.matchMedia('(prefers-color-scheme:dark)').matches,
    'isDarkMode'
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark-mode');
      document.documentElement.classList.remove('light-mode');
    }
    if (!isDarkMode) {
      document.documentElement.classList.remove('dark-mode');
      document.documentElement.classList.add('light-mode');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((isDark) => !isDark);
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export { DarkModePovider };
export default DarkModeContext;
