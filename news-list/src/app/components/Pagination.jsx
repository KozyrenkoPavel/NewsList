import Link from 'next/link';
import './Pagination.css';

function Pagination(props) {
  const { newsPageCount, countNews, newText, newDataNews } = props;
  const pageNumbers = [];

  let hrefPage = '';

  for (let i = 1; i <= Math.ceil(countNews() / newsPageCount); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      {pageNumbers.map((number) => {
        hrefPage = '/page/' + number;

        if (newText !== 'undefined' && newText !== undefined) {
          hrefPage = '/page/' + number + '?search=' + newText;
        }

        return (
          <Link className="linkPage" href={hrefPage} key={number}>
            {number}
          </Link>
        );
      })}
    </div>
  );
}

export default Pagination;
