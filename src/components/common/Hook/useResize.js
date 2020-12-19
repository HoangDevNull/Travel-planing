import { useState, useEffect } from 'react';

export function useResize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    window.addEventListener('resize', onresize);
    return () => {
      window.removeEventListener('resize', onresize);
    };
  }, []);

  const onresize = function () {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };

  return size;
}
