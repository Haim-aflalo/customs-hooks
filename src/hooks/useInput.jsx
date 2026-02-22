import { useState } from 'react';

function useInput(value) {
  const [val, setVal] = useState(value);

  function onChange(e) {
    setVal(e.target.value);
  }

  function setValue() {
    return setVal('newValue');
  }

  function reset() {
    setVal(value);
  }

  return { val, onChange, setValue, reset };
}

export default useInput;
