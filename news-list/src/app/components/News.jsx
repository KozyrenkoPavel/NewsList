import Link from 'next/link';
import stylesCardNews from '../utils/stylesCardNews';
import './News.css';

function News(props) {
  const { title, link, img, date, content, activBtnHorizontal } = props;
  const dateParse = new Date(date);
  let newContent = '';

  if (!activBtnHorizontal) {
    newContent = content.length > 110 ? content.slice(0, 110) + '...' : content;
  }

  if (activBtnHorizontal) {
    newContent = content.length > 217 ? content.slice(0, 217) + '...' : content;
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

  const hrefLink = link.includes('lenta.ru')
    ? 'https://lenta.ru/'
    : 'https://www.mos.ru/';

  const contentLink = link.includes('lenta.ru') ? 'lenta.ru' : 'mos.ru';

  return (
    <div
      className="newsContainer"
      style={stylesCardNews(activBtnHorizontal).style}
    >
      <div
        className="cardNews"
        style={stylesCardNews(activBtnHorizontal).styleCard}
      >
        {activBtnHorizontal ? (
          <Link href={`${link}`} rel="noreferrer" target="_blank">
            <img
              src={`${img}`}
              alt="img"
              style={stylesCardNews(activBtnHorizontal).styleImg}
            />
          </Link>
        ) : (
          false
        )}

        <div className="card">
          <div className="news">
            <h2 style={stylesCardNews(activBtnHorizontal).styleTitle}>
              {title}
            </h2>

            <div
              className="content"
              style={stylesCardNews(activBtnHorizontal).styleContent}
            >
              <p>{newContent}</p>
            </div>
          </div>

          {!activBtnHorizontal ? (
            <Link href={`${link}`} rel="noreferrer" target="_blank">
              <p>Подробнее</p>
            </Link>
          ) : (
            false
          )}
        </div>
      </div>

      <div className="footerCard">
        <Link href={hrefLink} rel="noreferrer" target="_blank">
          {contentLink}
        </Link>
        <p>{newDate}</p>
      </div>
    </div>
  );
}

export default News;
