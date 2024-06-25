import ContainerNewsList from '@/app/components/ContainerNewsList';
import fetchDataLenta from '@/app/utils/fetchDataLenta';
import fetchDataMos from '@/app/utils/fetchDataMos';

export default async function Pages({ params, searchParams }) {
  const newsListMos = await fetchDataMos();
  const newsList = await fetchDataLenta();
  const allNews = [...newsListMos, ...newsList];

  return (
    <div className="container">
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
