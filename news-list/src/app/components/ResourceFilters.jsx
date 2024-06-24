import Link from 'next/link';
import './ResourceFilters.css';

function ResourceFilters(props) {
  const { text, clickResourceFilters, news } = props;

  return (
    <div
      className="filter"
      onClick={(e) => {
        clickResourceFilters(news);
      }}
    >
      <Link href={'/page/1?filterParams=' + news}>{text}</Link>
    </div>
  );
}

export default ResourceFilters;
