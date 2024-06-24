import Link from 'next/link';
import './Header.css';

function Header(props) {
  const { text, chageText, newText, filterParams } = props;

  let searchText = text;
  let filter = 'all';

  const getInputText = (e) => {
    chageText(e.target.value);
  };

  const clearFilter = () => {
    chageText('');

    const linkClearFilter = document.querySelector('.clearFilter');
    linkClearFilter.click();
  };

  const pressingEnter = (e) => {
    if (e.keyCode === 13) {
      searchText = newText;
      const linkSearch = document.querySelector('.linkSearch');
      linkSearch.click();
      chageText('');
    }
  };

  if (filterParams !== undefined && filterParams !== 'undefined') {
    filter = filterParams;
  }

  return (
    <div className="header">
      <div className="title">
        <h1>Список новостей</h1>
        <button className="imageButton" onClick={clearFilter}></button>
      </div>
      <div className="search">
        <input
          type="text"
          value={text}
          onChange={getInputText}
          onKeyDown={pressingEnter}
        />
        <Link
          href={'/page/1?filterParams=' + filter + '&search=' + searchText}
          className="linkSearch"
        ></Link>
        <Link href="/" className="clearFilter"></Link>
      </div>
    </div>
  );
}

export default Header;
