'use client';

import Header from './Header';
import NewsList from './NewsList';
import Pagination from './Pagination';
import { useState, useEffect } from 'react';
import search from '../utils/search';

function ContainerNewsList(props) {
  const { newsList, newText, newNumber } = props;
  const [text, setText] = useState('');
  const [currentPage, setCurrentPage] = useState(newNumber ? newNumber : 1);
  const [newsPageCount] = useState(4);

  const newDataNews = newsList.filter((news) => {
    return search(news, newText);
  });

  const getDataNew = () => {
    if (newDataNews.length) {
      return newDataNews.length;
    } else {
      return newsList.length;
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

  useEffect(() => {
    if (newNumber !== undefined) {
      paginate(newNumber);
    }
  }, []);

  return (
    <>
      <Header text={text} chageText={chageText} newText={newText} />
      <NewsList
        text=""
        newText={newText}
        newsList={newsList}
        firstNewsIndex={firstNewsIndex}
        lastNewsIndex={lastNewsIndex}
        // setNewDataNews={setNewDataNews}
        newDataNews={newDataNews}
      />
      <Pagination
        newsPageCount={newsPageCount}
        countNews={getDataNew}
        newText={newText}
        newDataNews={newDataNews}
      />
    </>
  );
}

export default ContainerNewsList;
