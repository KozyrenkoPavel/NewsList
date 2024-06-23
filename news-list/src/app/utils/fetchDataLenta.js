async function fetchDataLenta() {
  const res = await fetch('http://localhost:4000/', {
    cache: 'no-store',
  });
  const result = await res.json();
  return result;
}

export default fetchDataLenta;
