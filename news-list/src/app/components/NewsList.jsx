import News from './News';
import content from '../utils/content';
import search from '../utils/search';
import './NewsList.css';

function NewsList(props) {
  const {
    newsList,
    text,
    newText,
    firstNewsIndex,
    lastNewsIndex,
  } = props;

  let key = 0;

  let searchText = text;

  if (newText !== undefined && newText !== 'undefined') {
    searchText = newText;
  }

  return (
    <div className="newsList">
      {newsList
        .filter((news) => {
          return search(news, searchText);
        })
        .slice(firstNewsIndex, lastNewsIndex)
        .map((news) => {
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
