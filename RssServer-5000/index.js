import cors from 'cors';
import express from 'express';
import RSSParser from 'rss-parser';

const feedURL = 'https://www.mos.ru/rss';
const parser = new RSSParser();
const PORT = 5000;

const parse = async (url) => {
  const articles = [];

  const feed = await parser.parseURL(url);

  feed.items.forEach((item) => {
    articles.push({ item });
  });

  return articles;
};

const app = express();
app.use(cors());

app.get('/', async (req, res) => {
  const data = await parse(feedURL);
  res.send(data);
});

const server = app.listen('5000', () => {
  console.log(`Server successfully started on port ${PORT}`);
});

export default server;
