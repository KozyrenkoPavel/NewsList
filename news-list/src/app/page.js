import ContainerNewsList from './components/ContainerNewsList';
import fetchDataLenta from './utils/fetchDataLenta';
import fetchDataMos from './utils/fetchDataMos';

export default async function Home({ params }) {
  const newsList = await fetchDataLenta();

  // const newsListMos = await fetchDataMos();
  // const allNews = [...newsList, ...newsListMos];
  return (
    <div className="containerNewsList">
      <ContainerNewsList
        newsList={newsList}
        newText={undefined}
        newNumber={undefined}
      />
    </div>
  );
}
