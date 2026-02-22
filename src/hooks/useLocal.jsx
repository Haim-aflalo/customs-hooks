import React, { useState } from 'react';

function useLocal(key, defaultValue) {
  const [value, setValue] = useState(defaultValue);

  function setVal() {
    localStorage.setItem(key, value);
  }

  return { value, setVal };
}

export default useLocal;
