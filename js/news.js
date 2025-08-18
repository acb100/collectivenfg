function createNewsItem(news) {
  const article = document.createElement('article');
  article.classList.add('news-item');

  const title = document.createElement('h3');
  title.textContent = news.title;

  const date = document.createElement('p');
  date.classList.add('news-date');
  date.textContent = news.date;

  const desc = document.createElement('p');
  desc.textContent = news.description;

  article.appendChild(title);
  article.appendChild(date);
  article.appendChild(desc);

  if(news.link) {
    const a = document.createElement('a');
    a.href = news.link;
    a.target = "_blank";
    a.textContent = "Read more";
    article.appendChild(a);
  }

  return article;
}
