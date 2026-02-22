function useLocal(key, defaultValue) {
  function setVal() {
    localStorage.setItem(key, defaultValue);
  }
  function remove() {
    localStorage.removeItem(key);
  }

  return { setVal, remove };
}

export default useLocal;
