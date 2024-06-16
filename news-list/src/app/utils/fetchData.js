async function fetchData() {
  const res = await fetch('http://localhost:4000/');
  const result = await res.json();
  return result;
}

export default fetchData;
