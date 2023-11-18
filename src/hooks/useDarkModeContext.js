import { useContext } from 'react';
import DarkModeContext from '../contexts/darkModeCotext';

function useDarkModeContext() {
  return useContext(DarkModeContext);
}
export { useDarkModeContext };
