const slider = tns({
  container: ".hero__slides",
  autoplay: true,
  // autoWidth: true,
  controls: false,
  navContainer: ".hero__slider-controls",
  autoplay: true,
  autoplayButtonOutput: false,
  autoHeight: false,
});

const mealsSlider = tns({
  container: ".meals__list",
  items: 4,
  lazyload: true,
  nav: false,
  controlsContainer: "#meals__btns",
  responsive: {
    "1920": {
      items: 4,
      gutter: 40
    },
    "1366": {
      items: 4,
      gutter: 30
    },
    "992": {
      items: 3
    },
    "768": {
      items: 2
    },
    "576": {
      items: 1
    }
  }
});

const articlesWrapper = document.querySelector(`.posts__container`);
const fragment = document.createDocumentFragment();

const POSTS = [
  `https://www.instagram.com/p/CNHAiRvplU-/`,
  `https://www.instagram.com/p/CNFGXsXp2Ti/`,
  `https://www.instagram.com/p/CNCcXIZpoiG/`
];

const ACCESS_TOKEN = `EAACx0PvGhskBAMzld03WeZCodH1w6kLHUTOspULuciuz2sTdDHYOu6ZBgIzUHl2IXbwSZCj24LO0ZCQ3ZBGlZCyqeHOMJUI5ZCg2v2tNOHrqYpy2q0spWy385B87ZBnGgE4Gl5AIUh3zWcsMc0XgIFueeQYd1pfm1VTZCbY6k8ONY6ersckksirVWlNLaODtk0c15r9UVsu5izgZDZD`;

const URL = `https://graph.facebook.com/v10.0/instagram_oembed`;

POSTS.forEach(async (post) => {
  const response = await fetch(`${URL}?url=${post}&maxwidth=422&access_token=${ACCESS_TOKEN}`)
  if (await response.status === 200) {
    const instaData = await response.json();

    const article = document.createElement(`article`);
    article.classList.add(`posts__item`);

    article.innerHTML = instaData.html;
    articlesWrapper.append(article);
  }
});


