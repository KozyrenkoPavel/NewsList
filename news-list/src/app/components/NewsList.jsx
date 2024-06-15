import News from './News';
import content from '../utils/content';
import './NewsList.css';

function NewsList(props) {
  const { newsList } = props;
  let key = 0;

  return (
    <div className="newsList">
      {newsList.map((news) => {
        key++;

        return (
          <News
            key={key}
            title={news.item.title}
            link={news.item.link}
            date={news.item.pubDate}
            img={news.item.enclosure.url}
            author={news.item.author}
            content={content}
          />
        );
      })}
    </div>
  );
}

export default NewsList;
