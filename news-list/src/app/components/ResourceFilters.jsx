import Link from 'next/link';
import './ResourceFilters.css';

function ResourceFilters(props) {
  const { text, clickResourceFilters, news, filter } = props;

  let style = {};

  if (news === filter) {
    style = { color: '#000' };
  } else {
    style = { color: '#0029FF' };
  }

  const hrefLinkResource =
    news === 'all' ? '/page/1' : '/page/1?filterParams=' + news;

  return (
    <div
      className="filter"
      onClick={(e) => {
        clickResourceFilters(news);
      }}
    >
      <Link href={hrefLinkResource} style={style}>
        {text}
      </Link>
    </div>
  );
}

export default ResourceFilters;
