import { useState } from 'react';

function useCounter(number, steps) {
  const [value, setValue] = useState(number);
  const [step, setStep] = useState(steps);

  function inc() {
    return setValue(Number(value) + Number(step));
  }
  function dec() {
    return setValue(Number(value) - Number(step));
  }
  function reset() {
    return setValue(number);
  }

  function changeNum(e) {
    setValue(e.target.value);
  }
  function changeStep(e) {
    setStep(e.target.value);
  }

  return { value, step, inc, dec, reset, changeNum, changeStep };
}

export default useCounter;
