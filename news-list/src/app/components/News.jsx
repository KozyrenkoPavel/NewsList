import Link from 'next/link';
import setStyleCardNews from '../utils/setStyleCardNews';
import setStyleLaptop from '../utils/setStyleLaptop';
import './News.css';

function News(props) {
  const { title, link, img, date, content, isActiveBtn, isLaptop } = props;
  const dateParse = new Date(date);
  let newContent = '';
  const hrefLink = link.includes('lenta.ru')
    ? 'https://lenta.ru/'
    : 'https://www.mos.ru/';

  const contentLink = link.includes('lenta.ru') ? 'lenta.ru' : 'mos.ru';

  if (isActiveBtn) {
    newContent = content.length > 110 ? content.slice(0, 110) + '...' : content;
  }

  if (!isActiveBtn) {
    newContent = content.length > 217 ? content.slice(0, 217) + '...' : content;
  }

  if (isLaptop) {
    newContent = content.length > 85 ? content.slice(0, 85) + '...' : content;
  }

  let newDate =
    dateParse.getDate() +
    '.' +
    (Number(dateParse.getMonth()) + 1) +
    '.' +
    dateParse.getFullYear();

  if (Number(dateParse.getDate()) < 10) {
    newDate =
      '0' +
      dateParse.getDate() +
      '.' +
      (Number(dateParse.getMonth()) + 1) +
      '.' +
      dateParse.getFullYear();
  }

  if (Number(dateParse.getMonth()) + 1 < 10) {
    newDate =
      dateParse.getDate() +
      '.0' +
      (Number(dateParse.getMonth()) + 1) +
      '.' +
      dateParse.getFullYear();
  }

  if (
    Number(dateParse.getDate()) < 10 &&
    Number(dateParse.getMonth()) + 1 < 10
  ) {
    newDate =
      '0' +
      dateParse.getDate() +
      '.0' +
      (Number(dateParse.getMonth()) + 1) +
      '.' +
      dateParse.getFullYear();
  }

  return (
    <div
      className="newsContainer"
      style={
        isLaptop
          ? setStyleLaptop(isActiveBtn).styleNews
          : setStyleCardNews(isActiveBtn).styleNews
      }
    >
      <div
        className="cardNews"
        style={
          isLaptop
            ? setStyleLaptop(isActiveBtn).styleCard
            : setStyleCardNews(isActiveBtn).styleCard
        }
      >
        {!isActiveBtn ? (
          <Link href={`${link}`} rel="noreferrer" target="_blank">
            <img
              src={`${img}`}
              alt="img"
              style={
                isLaptop
                  ? setStyleLaptop(isActiveBtn).styleImg
                  : setStyleCardNews(isActiveBtn).styleImg
              }
            />
          </Link>
        ) : (
          false
        )}

        <div className="card">
          <div className="news">
            <h2
              style={
                isLaptop
                  ? setStyleLaptop(isActiveBtn).styleTitle
                  : setStyleCardNews(isActiveBtn).styleTitle
              }
            >
              {title}
            </h2>

            <div
              className="content"
              style={
                isLaptop
                  ? setStyleLaptop(isActiveBtn).styleContent
                  : setStyleCardNews(isActiveBtn).styleContent
              }
            >
              <p>{newContent}</p>
            </div>
          </div>

          {isActiveBtn || isLaptop ? (
            <Link href={`${link}`} rel="noreferrer" target="_blank">
              <p>Подробнее</p>
            </Link>
          ) : (
            false
          )}
        </div>
      </div>

      <div
        className="footerCard"
        style={
          isLaptop
            ? setStyleLaptop(isActiveBtn).styleMoreDetails
            : setStyleCardNews(isActiveBtn).styleMoreDetails
        }
      >
        <Link href={hrefLink} rel="noreferrer" target="_blank">
          {contentLink}
        </Link>
        <p>{newDate}</p>
      </div>
    </div>
  );
}

export default News;
