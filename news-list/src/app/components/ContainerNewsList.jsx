'use client';

import Header from './Header';
import NewsList from './NewsList';
import Pagination from './Pagination';
import { useState, useEffect } from 'react';
import search from '../utils/search';
import ResourceFilters from './ResourceFilters';
import HorizontalBtn from './HorizontalBtn';
import BoxBtn from './BoxBtn';

function ContainerNewsList(props) {
  const { newsList, newsListMos, allNews, newText, newNumber, filterParams } =
    props;
  const [text, setText] = useState('');
  const [currentPage, setCurrentPage] = useState(newNumber ? newNumber : 1);
  const [newsPageCount] = useState(4);
  const [filter, setFilter] = useState('all');

  let renderNews = allNews;

  if (filter === 'all') {
    renderNews = allNews;
  } else if (filter === 'Lenta.ru') {
    renderNews = newsList;
  } else if (filter === 'Mos.ru') {
    renderNews = newsListMos;
  }

  const newDataNews = renderNews.filter((news) => {
    return search(news, newText);
  });

  const getDataNew = () => {
    if (newDataNews.length) {
      return newDataNews.length;
    } else {
      return renderNews.length;
    }
  };

  const lastNewsIndex = currentPage * newsPageCount;
  const firstNewsIndex = lastNewsIndex - newsPageCount;

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const chageText = (text) => {
    setText(text);
  };

  const clickResourceFilters = (filter) => {
    setFilter(filter);
  };

  useEffect(() => {
    if (newNumber !== undefined) {
      paginate(newNumber);
    }
    if (filterParams !== undefined) {
      setFilter(filterParams);
    }
  }, []);

  return (
    <>
      <Header
        text={text}
        chageText={chageText}
        newText={newText}
        filterParams={filterParams}
      />

      <div className="display">
        <div className="displayBtn">
          <HorizontalBtn />
          <BoxBtn />
        </div>
      </div>

      <div className="resourseFilters">
        <ResourceFilters
          text="Все"
          clickResourceFilters={clickResourceFilters}
          news="all"
        />
        <ResourceFilters
          text="Lenta.ru"
          clickResourceFilters={clickResourceFilters}
          news="Lenta.ru"
        />
        <ResourceFilters
          text="Mos.ru"
          clickResourceFilters={clickResourceFilters}
          news="Mos.ru"
        />
      </div>
      <NewsList
        text=""
        newText={newText}
        newsList={renderNews}
        firstNewsIndex={firstNewsIndex}
        lastNewsIndex={lastNewsIndex}
        newDataNews={newDataNews}
      />
      <Pagination
        newsPageCount={newsPageCount}
        countNews={getDataNew}
        newText={newText}
        filterParams={filterParams}
        currentPage={currentPage}
      />
    </>
  );
}

export default ContainerNewsList;
