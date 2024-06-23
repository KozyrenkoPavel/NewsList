async function fetchDataMos() {
  const res = await fetch('http://localhost:5000/', {
    cache: 'no-store',
  });
  const result = await res.json();
  return result;
}

export default fetchDataMos;
