import { useCallback, useState } from 'react';

const UseClientRect = () => {
  const [rect, setRect] = useState(null);
  const ref = useCallback(node => {
    if (node !== null) {
      setRect(node.getBoundingClientRect());
    }
  }, []);
  return [rect, ref];
};

export default UseClientRect;
