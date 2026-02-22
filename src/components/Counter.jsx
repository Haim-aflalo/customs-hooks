import useCounter from '../hooks/useCounter';

function Counter() {
  const { value, step, inc, dec, reset, changeNum, changeStep } = useCounter();
  return (
    <>
      <input type="number" placeholder="Your Number" onChange={changeNum} />
      value:{value}
      <br />
      <input type="number" placeholder="Your steps" onChange={changeStep} />
      step:{step}
      <br />
      <button onClick={inc}>inc</button>
      <button onClick={dec}>dec</button>
      <button onClick={reset}>reset</button>
    </>
  );
}

export default Counter;
