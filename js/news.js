// Array med nyheder
const news = [
  { title: "New NYT NAVN Single Out", date: "Aug 15, 2025", content: "NYT NAVN drops a new dance track!", link: "https://distrokid.com/hyperfollow/nytnavn/danser-alene-2" },
  { title: "Shrooma Live Show", date: "Aug 16, 2025", content: "Catch Shrooma live at Mushroom Forest!", link: "" },
  { title: "Event Announcement", date: "Aug 20, 2025", content: "Exciting new events coming up!", link: "" }
];

// Til forsiden – de 3-4 nyeste
const latestContainer = document.getElementById("latest-news");
if (latestContainer) {
  news.slice(0, 4).forEach(item => {
    const article = document.createElement("article");
    article.classList.add("news-card");
    article.innerHTML = `
      <h3>${item.title}</h3>
      <p class="news-date">${item.date}</p>
      <p>${item.content}</p>
      ${item.link ? `<a href="${item.link}" target="_blank">Read more</a>` : ""}
    `;
    latestContainer.appendChild(article);
  });
}
