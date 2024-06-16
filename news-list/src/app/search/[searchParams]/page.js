import ContainerNewsList from '@/app/components/ContainerNewsList';
import fetchData from '@/app/utils/fetchData';

export default async function SearchParams({ params }) {
  const newsList = await fetchData();

  return (
    <div className="containerNewsList">
      <ContainerNewsList newsList={newsList} newText={decodeURI(params.searchParams)} />
    </div>
  );
}
