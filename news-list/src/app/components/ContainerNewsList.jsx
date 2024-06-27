'use client';

import Header from './Header';
import NewsList from './NewsList';
import Pagination from './Pagination';
import { useState, useEffect } from 'react';
import search from '../utils/search';
import ResourceFilters from './ResourceFilters';
import BtnDisplay from './BtnDisplay';
import './ContainerNewsList.css';

function ContainerNewsList(props) {
  const { newsList, newsListMos, allNews, newText, newNumber, filterParams } =
    props;
  const [text, setText] = useState('');
  const [currentPage] = useState(newNumber ? newNumber : 1);
  const [newsPageCount] = useState(4);
  const [filter, setFilter] = useState('all');
  const [isActiveBtn, setIsActiveBtn] = useState(1);
  const [isPaintBtn, setPaintBtn] = useState(0);
  const [isPaintBtnBox, setPaintBtnBox] = useState(1);
  const [loading, setLoading] = useState(true);

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

  const chageText = (text) => {
    setText(text);
  };

  const clickResourceFilters = (filter) => {
    setFilter(filter);
  };

  const clickBtnBox = () => {
    localStorage.setItem('isActiveBtn', '1');
    setIsActiveBtn(1);
    setPaintBtn(0);
    setPaintBtnBox(1);
  };

  const clickBtnHorizontal = () => {
    localStorage.setItem('isActiveBtn', '0');
    setIsActiveBtn(0);
    setPaintBtn(1);
    setPaintBtnBox(0);
  };

  useEffect(() => {
    setLoading(false);

    const localStorageIsActiveBtn = localStorage.getItem('isActiveBtn');

    if (localStorageIsActiveBtn && Number(localStorageIsActiveBtn)) {
      setIsActiveBtn(1);
      setPaintBtn(0);
      setPaintBtnBox(1);
    } else {
      setIsActiveBtn(0);
      setPaintBtn(1);
      setPaintBtnBox(0);
    }

    if (filterParams !== undefined) {
      setFilter(filterParams);
    }
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

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
          <BtnDisplay
            clickBtn={clickBtnHorizontal}
            isBox={false}
            isPaint={isPaintBtn}
            clas="strip"
          />
          <BtnDisplay
            clickBtn={clickBtnBox}
            isBox={true}
            isPaint={isPaintBtnBox}
            clas="box"
          />
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
        isActiveBtn={isActiveBtn}
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
