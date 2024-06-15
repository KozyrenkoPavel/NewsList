import Header from './components/Header';
import NewsList from './components/NewsList';

async function fetchData() {
  const res = await fetch('http://localhost:4000/');
  const result = await res.json();
  return result;
}

export default async function Home() {
  const newsList = await fetchData();

  return (
    <div className="container">
      <Header />
      <NewsList newsList={newsList} />
    </div>
  );
}
