import {useState, useEffect} from 'react';

// function useGetWindowDimensions() {
//   const {innerWidth: width, innerHeight: height} = globalThis?.window;
//   return {width, height};
// }

export default function useWindowDimensions() {
  const [width, setWidth] = useState(globalThis?.window?.innerWidth);
  const [height, setHeight] = useState(globalThis?.window?.innerHeight);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);
  return {width, height};
}
