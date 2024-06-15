import cors from 'cors';
import express from 'express';
import RSSParser from 'rss-parser';

const feedURL = 'https://lenta.ru/rss/news';
const parser = new RSSParser();
const PORT = 4000;
let articles = [];

const parse = async (url) => {
  const feed = await parser.parseURL(url);

  feed.items.forEach((item) => {
    articles.push({ item });
  });
};

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  parse(feedURL);

  res.send(articles);
});

const server = app.listen('4000', () => {
  console.log(`Server successfully started on port ${PORT}`);
});

export default server;
