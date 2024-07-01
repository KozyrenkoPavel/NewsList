import Link from 'next/link';
import setStyleBtnPagination from '../utils/setStyleBtnPagination';
import './Pagination.css';

function Pagination(props) {
  const { newsPageCount, countNews, newText, filterParams, currentPage } =
    props;
  const pageNumbers = [];

  let hrefPage = '';

  for (let i = 1; i <= Math.ceil(countNews() / newsPageCount); i++) {
    pageNumbers.push(i);
  }

  const setHrefLink = (number) => {
    hrefPage = '/page/' + number;

    if (
      filterParams !== 'undefined' &&
      filterParams !== undefined &&
      filterParams !== 'all'
    ) {
      hrefPage = '/page/' + number + '?filterParams=' + filterParams;
    }

    if (newText !== 'undefined' && newText !== undefined) {
      hrefPage =
        '/page/' +
        number +
        '?filterParams=' +
        filterParams +
        '&search=' +
        newText;
    }
  };

  return (
    <div className="pagination">
      {pageNumbers.map((number, index) => {
        setHrefLink(number);

        if (Number(currentPage) === 1 || Number(currentPage) === 2) {
          if (index + 1 < 5) {
            return (
              <Link
                className="linkPage"
                href={hrefPage}
                key={number}
                style={setStyleBtnPagination(number, currentPage)}
              >
                {number}
              </Link>
            );
          } else if (index + 1 === pageNumbers.length) {
            return (
              <span className="lastPage" key={number + 1}>
                <h4>...</h4>
                <Link
                  className="linkPage"
                  href={hrefPage}
                  key={number}
                  style={setStyleBtnPagination(number, currentPage)}
                >
                  {number}
                </Link>
              </span>
            );
          }
        } else if (
          Number(currentPage) > 2 &&
          Number(currentPage) !== pageNumbers.length &&
          Number(currentPage) !== pageNumbers.length - 1 &&
          Number(currentPage) !== pageNumbers.length - 2 &&
          Number(currentPage) !== pageNumbers.length - 3
        ) {
          if (
            index + 1 === Number(currentPage) - 1 ||
            index + 1 === Number(currentPage) - 2 ||
            index + 1 === Number(currentPage) ||
            index + 1 === Number(currentPage) + 1
          ) {
            return (
              <Link
                className="linkPage"
                href={hrefPage}
                key={number}
                style={setStyleBtnPagination(number, currentPage)}
              >
                {number}
              </Link>
            );
          } else if (index + 1 === pageNumbers.length) {
            return (
              <span className="lastPage" key={number + 1}>
                <h4>...</h4>
                <Link
                  className="linkPage"
                  href={hrefPage}
                  key={number}
                  style={setStyleBtnPagination(number, currentPage)}
                >
                  {number}
                </Link>
              </span>
            );
          }
        } else if (
          Number(currentPage) === pageNumbers.length ||
          Number(currentPage) === pageNumbers.length - 1 ||
          Number(currentPage) === pageNumbers.length - 2 ||
          Number(currentPage) === pageNumbers.length - 3
        ) {
          if (index + 1 === 1) {
            return (
              <span className="lastPage" key={number + 1}>
                <Link
                  className="linkPage"
                  href={hrefPage}
                  key={number}
                  style={setStyleBtnPagination(number, currentPage)}
                >
                  {number}
                </Link>
                <h4>...</h4>
              </span>
            );
          } else if (
            index + 1 === Number(currentPage) - 1 ||
            index + 1 === Number(currentPage) - 2 ||
            index + 1 === Number(currentPage) ||
            index + 1 === Number(currentPage) + 1
          ) {
            return (
              <Link
                className="linkPage"
                href={hrefPage}
                key={number}
                style={setStyleBtnPagination(number, currentPage)}
              >
                {number}
              </Link>
            );
          }
        }
      })}
    </div>
  );
}

export default Pagination;
