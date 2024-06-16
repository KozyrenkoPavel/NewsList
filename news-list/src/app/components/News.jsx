import Link from 'next/link';
import './News.css'

function News(props) {
  const { title, link, date, author, content } = props;
  const dateParse = new Date(date);
  let newDate = dateParse.getHours() + ':' + dateParse.getMinutes();

  return (
    <div className="newsContainer">
      <Link href={`${link}`} rel="noreferrer" target="_blank">
        <div className="container">
          {/* {isActivBtn ? (
            <img src={`${img}`} alt="img" style={styleImg} />
          ) : (
            false
          )} */}

          <div className="news">
            <div className="authorAndDate">
              <h4 className="date">{newDate}</h4>
              <h4>{author}</h4>
            </div>
            <h2>{title}</h2>

            <div className="content">
              <p>{content}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default News;
