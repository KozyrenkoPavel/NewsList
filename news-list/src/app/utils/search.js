import content from './content';

const search = (news, textInput) => {
  return (
    news.item.title?.includes(textInput) ||
    news.item.author?.includes(textInput) ||
    news.item.pubDate?.includes(textInput) ||
    content?.includes(textInput)
  );
};

export default search;
