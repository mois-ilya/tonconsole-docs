import React from 'react';

export const useOutsideClick = (callback: () => void, withTouch: undefined | boolean = true) => {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent | Event) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    if (withTouch) {
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (withTouch) {
        document.removeEventListener('touchstart', handleClickOutside);
      }
    };
  }, [callback]);

  return ref;
};
