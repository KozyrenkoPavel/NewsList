import Link from 'next/link';
import './Header.css';

function Header(props) {
  const { text, setText } = props;

  const getInputText = (event) => {
    setText(event.target.value);
  };

  const clearFilter = () => {
    setText('');

    const linkClearFilter = document.querySelector('.clearFilter');
    linkClearFilter.click();
  };

  const pressingEnter = (e) => {
    if (e.keyCode === 13) {
      const linkSearch = document.querySelector('.linkSearch');
      linkSearch.click();
    }
  };

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
        <Link href={'/search/' + text} className="linkSearch"></Link>
        <Link href="/" className="clearFilter"></Link>
      </div>
    </div>
  );
}

export default Header;
