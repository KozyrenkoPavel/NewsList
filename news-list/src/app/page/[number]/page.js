import ContainerNewsList from '@/app/components/ContainerNewsList';
import fetchDataLenta from '@/app/utils/fetchDataLenta';

export default async function Params({ params, searchParams }) {
  const newsList = await fetchDataLenta();

  return (
    <div className="containerNewsList">
      <ContainerNewsList
        newsList={newsList}
        newText={decodeURI(searchParams.search)}
        newNumber={params.number}
      />
    </div>
  );
}
