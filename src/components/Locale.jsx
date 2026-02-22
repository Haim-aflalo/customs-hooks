import useLocal from '../hooks/useLocal';

function Locale() {
  const {  setVal, remove } = useLocal('hello', 'world');

  return (
    <>
      <button onClick={setVal}>Set</button>
      <button onClick={remove}>Remove</button>
    </>
  );
}

export default Locale;
