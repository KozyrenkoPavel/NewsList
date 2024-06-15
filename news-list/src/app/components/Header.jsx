'use client';

import { useState } from 'react';
import './Header.css';

function Header() {
  const [text, setText] = useState('');

  const getInputText = (event) => {
    setText(event.target.value);
  };

  const clearFilter = () => {
    setText('');

    // localStorage.setItem('isActivBtn', '0');
    // localStorage.setItem('isActivBtnBox', '1');
    // localStorage.setItem('number', '1');
    // setIsActivBtn(Number(localStorage.getItem('isActivBtn')));
    // setIsActivBtnBox(Number(localStorage.getItem('isActivBtnBox')));
    // setCurrentPage(Number(localStorage.getItem('number')));
  };

  return (
    <div className="header">
      <div className="title">
        <h1>Список новостей</h1>
        <button className="imageButton" onClick={clearFilter}></button>
      </div>
      <div className="search">
        <input type="text" value={text} onChange={getInputText} />
      </div>
    </div>
  );
}

export default Header;
