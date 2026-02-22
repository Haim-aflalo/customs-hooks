import useToggle from '../hooks/useToggle';

function Toggle() {
  const { value, toggle, setTrue, setFalse } = useToggle();
  return (
    <>
      {String(value)}
      <br />
      <button onClick={toggle}>toggle</button>
      <button onClick={setTrue}>setTrue</button>
      <button onClick={setFalse}>setFalse</button>
    </>
  );
}

export default Toggle;
