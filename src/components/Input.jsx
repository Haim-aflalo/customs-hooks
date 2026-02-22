import useInput from '../hooks/useInput';

function Input() {
  const { val, onChange, setValue, reset } = useInput();
  return (
    <>
      {val}
      <br />
      <input type="text" onChange={onChange} />
      <br />
      <br />
      <button onClick={setValue}>Get A Value</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default Input;
