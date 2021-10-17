import {useRouter} from 'next/dist/client/router';
import {useRef, useState} from 'react';

function DelayLink({className, to, delay, id, history, children}) {
  const router = useRouter();
  const c = useRef(null);
  const image = require(`../assets/${id}.png`);
  const [redirect, setRedirect] = useState(false);
  const handleClick = () => {};
  const renderRedirect = () => {
    if (redirect) {
      return router.replace(to);
    }
  };
  return (
    <div ref={c} id={id} onClick={handleClick} className={className}>
      {renderRedirect()}
      {children}
    </div>
  );
}

export default DelayLink;
