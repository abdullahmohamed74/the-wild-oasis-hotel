import { useRef, useEffect } from 'react';

function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();

  // close the modal window when click outside it
  useEffect(() => {
    const clickHandler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        handler();
      }
    };

    document.addEventListener('click', clickHandler, listenCapturing);
    return () => {
      document.removeEventListener('click', clickHandler, listenCapturing);
    };
  }, [handler, listenCapturing]);

  return { ref };
}
export default useOutsideClick;
