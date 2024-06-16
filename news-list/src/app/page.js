import ContainerNewsList from './components/ContainerNewsList';
import fetchData from './utils/fetchData';

export default async function Home() {
  const newsList = await fetchData();

  return (
    <div className="containerNewsList">
      <ContainerNewsList newsList={newsList} newText={undefined} />
    </div>
  );
}
