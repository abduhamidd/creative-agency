import {useRouter} from 'next/router';
import gsap from 'gsap';
const TrueDelayLink = ({to, delay, children}) => {
  const router = useRouter();

  const handleClick = () => {
    const tl = gsap.timeline();
    tl.to('.content-section div', {
      duration: 0.5,
      opacity: 0,
    });
  };
  setTimeout(() => {
    router.push(to);
  }, delay);
  return <a onClick={handleClick}>{children}</a>;
};
export default TrueDelayLink;
