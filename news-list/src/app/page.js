import { redirect } from 'next/navigation';
import ContainerNewsList from './components/ContainerNewsList';
import fetchDataLenta from './utils/fetchDataLenta';
import fetchDataMos from './utils/fetchDataMos';

export default async function Home() {
  const newsList = await fetchDataLenta();
  const newsListMos = await fetchDataMos();
  const allNews = [...newsList, ...newsListMos];

  redirect('/page/1?filterParams=all');

  // return (
  //   <div className="containerNewsList">
  //     <ContainerNewsList
  //       newsList={newsList}
  //       newsListMos={newsListMos}
  //       allNews={allNews}
  //       newText={undefined}
  //       newNumber={undefined}
  //       filterParams={undefined}
  //     />
  //   </div>
  // );
}
