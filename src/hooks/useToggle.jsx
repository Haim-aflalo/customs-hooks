import { useState } from 'react';

function useToggle() {
  const [value, setValue] = useState(true);

  function toggle() {
    return setValue(!value);
  }
  function setTrue() {
    return setValue(true);
  }
  function setFalse() {
    return setValue(false);
  }

  return { value, toggle, setTrue, setFalse };
}

export default useToggle;
