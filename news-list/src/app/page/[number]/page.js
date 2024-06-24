import ContainerNewsList from '@/app/components/ContainerNewsList';
import fetchDataLenta from '@/app/utils/fetchDataLenta';
import fetchDataMos from '@/app/utils/fetchDataMos';

export default async function Pages({ params, searchParams }) {
  const newsList = await fetchDataLenta();
  const newsListMos = await fetchDataMos();
  const allNews = [...newsList, ...newsListMos];

  return (
    <div className="containerNewsList">
      <ContainerNewsList
        newsList={newsList}
        newsListMos={newsListMos}
        allNews={allNews}
        newText={decodeURI(searchParams.search)}
        newNumber={params.number}
        filterParams={searchParams.filterParams}
      />
    </div>
  );
}
