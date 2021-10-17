import {useState, useEffect} from 'react';
export default function useGetWindowDimensions() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  }, []);
  return {width, height};
}
