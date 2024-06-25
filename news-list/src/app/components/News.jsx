import Link from 'next/link';
import './News.css';

function News(props) {
  const { title, link, img, date, content, activBtnHorizontal } = props;
  const dateParse = new Date(date);
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

  let style = {};
  let styleCard = {};
  let styleImg = {};
  let styleTitle = {};

  if (activBtnHorizontal) {
    style = {
      width: '1060px',
      height: '189px',
      display: 'flex',
      justifyContent: 'space-between',
    };
    styleCard = {
      width: '100%',
    };
    styleImg = { marginRight: '30px' };
    styleTitle = {
      width: '772px',
      height: '44px',
      fontWeight: '700',
      fontSize: '18px',
      lineHeight: '22px',
    };
  } else {
    style = {
      maxWidth: '520px',
      height: '256px',
      display: 'bloc',
    };
    styleCard = { width: '100%' };
    styleTitle = {
      width: '459px',
      height: '66px',
      lineHeight: '20px',
    };
  }

  return (
    <div className="newsContainer" style={style}>
      {activBtnHorizontal ? (
        <img src={`${img}`} alt="img" style={styleImg} />
      ) : (
        false
      )}

      <div className="cardNews" style={styleCard}>
        <div className="card">
          <div className="news">
            <h2 style={styleTitle}>{title}</h2>

            <div className="content">
              <p>{content}</p>
            </div>
          </div>

          <Link href={`${link}`} rel="noreferrer" target="_blank">
            <p>Подробнее</p>
          </Link>
        </div>

        <div className="footerCard">
          <Link href={hrefLink} rel="noreferrer" target="_blank">
            {contentLink}
          </Link>
          <p>{newDate}</p>
        </div>
      </div>
    </div>
  );
}

export default News;
