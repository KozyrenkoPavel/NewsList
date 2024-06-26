'use client';

import Header from './Header';
import NewsList from './NewsList';
import Pagination from './Pagination';
import { useState, useEffect } from 'react';
import search from '../utils/search';
import ResourceFilters from './ResourceFilters';
import HorizontalBtn from './HorizontalBtn';
import BoxBtn from './BoxBtn';
import './ContainerNewsList.css';

function ContainerNewsList(props) {
  const localStorageActivBtnBox = localStorage.getItem('activBtnBox');
  const localStorageactivBtnHorizontal =
    localStorage.getItem('activBtnHorizontal');

  const { newsList, newsListMos, allNews, newText, newNumber, filterParams } =
    props;
  const [text, setText] = useState('');
  const [currentPage, setCurrentPage] = useState(newNumber ? newNumber : 1);
  const [newsPageCount] = useState(4);
  const [filter, setFilter] = useState('all');
  const [activBtnBox, setActivBtnBox] = useState(
    localStorageActivBtnBox ? Number(localStorageActivBtnBox) : 1
  );
  const [activBtnHorizontal, setactivBtnHorizontal] = useState(
    localStorageactivBtnHorizontal ? Number(localStorageactivBtnHorizontal) : 0
  );

  let renderNews = allNews;

  if (filter === 'all') {
    renderNews = allNews;
  } else if (filter === 'Lenta.ru') {
    renderNews = newsList;
  } else if (filter === 'Mos.ru') {
    renderNews = newsListMos;
  }

  const lastNewsIndex = currentPage * newsPageCount;
  const firstNewsIndex = lastNewsIndex - newsPageCount;

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

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const chageText = (text) => {
    setText(text);
  };

  const clickResourceFilters = (filter) => {
    setFilter(filter);
  };

  const clickBtnBox = () => {
    localStorage.setItem('activBtnHorizontal', '0');
    localStorage.setItem('activBtnBox', '1');

    setactivBtnHorizontal(Number(localStorage.getItem('activBtnHorizontal')));
    setActivBtnBox(Number(localStorage.getItem('activBtnBox')));
  };

  const clickBtnHorizontal = () => {
    localStorage.setItem('activBtnHorizontal', '1');
    localStorage.setItem('activBtnBox', '0');

    setactivBtnHorizontal(Number(localStorage.getItem('activBtnHorizontal')));
    setActivBtnBox(Number(localStorage.getItem('activBtnBox')));
  };

  useEffect(() => {
    if (filterParams !== undefined) {
      setFilter(filterParams);
    }
  }, []);

  return (
    <div className="containerNewsList">
      <Header
        text={text}
        chageText={chageText}
        newText={newText}
        filterParams={filterParams}
      />

      <hr />

      <div className="display">
        <div className="displayBtn">
          <HorizontalBtn
            clickBtnHorizontal={clickBtnHorizontal}
            activBtnHorizontal={activBtnHorizontal}
          />
          <BoxBtn clickBtnBox={clickBtnBox} activBtnBox={activBtnBox} />
        </div>
      </div>

      <div className="resourseFilters">
        <ResourceFilters
          filter={filter}
          text="Все"
          clickResourceFilters={clickResourceFilters}
          news="all"
        />
        <ResourceFilters
          filter={filter}
          text="Lenta.ru"
          clickResourceFilters={clickResourceFilters}
          news="Lenta.ru"
        />
        <ResourceFilters
          filter={filter}
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
        activBtnHorizontal={activBtnHorizontal}
      />
      <Pagination
        newsPageCount={newsPageCount}
        countNews={getDataNew}
        newText={newText}
        filterParams={filterParams}
        currentPage={currentPage}
      />
    </div>
  );
}

export default ContainerNewsList;
