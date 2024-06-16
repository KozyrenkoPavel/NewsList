'use client';

import Header from './Header';
import NewsList from './NewsList';
import { useState } from 'react';

function ContainerNewsList(props) {
  const { newsList, newText } = props;
  const [text, setText] = useState('');

  return (
    <>
      <Header text={text} setText={setText} />
      <NewsList
        text=""
        setText={setText}
        newText={newText}
        newsList={newsList}
      />
    </>
  );
}

export default ContainerNewsList;
