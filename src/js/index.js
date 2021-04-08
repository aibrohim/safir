const introSlides = document.querySelector(`.hero__slides`);
const mealsSlides = document.querySelector(`.meals__list`);

if (introSlides && mealsSlides) {
  const slider = tns({
    mode: "gallery",
    container: ".hero__slides",
    autoplay: true,
    speed: 700,
    // autoWidth: true,
    controls: false,
    navContainer: ".hero__slider-controls",
    autoplay: true,
    autoplayButtonOutput: false,
    autoHeight: false,
  });
  slider.pause();

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
      },
      "0": {
        items: 1
      }
    }
  });
}

const articlesWrapper = document.querySelector(`.posts__wrapper`);
if (articlesWrapper) {
  const fragment = document.createDocumentFragment();

  const POSTS = [
    `https://www.instagram.com/p/CNHAiRvplU-/`,
    `https://www.instagram.com/p/CNFGXsXp2Ti/`,
    `https://www.instagram.com/p/CNCcXIZpoiG/`
  ];

  POSTS.forEach(async (post) => {
    const article = document.createElement(`iframe`);
    article.src = post + "embed/captioned"
    article.classList.add(`posts__item`);

    articlesWrapper.append(article);
  });
}

const header = document.querySelector(`.main-header`);
const body = document.querySelector(`body`);

if (header) {
  window.addEventListener(`scroll`, () => {
    if (window.pageYOffset >= 330) {
      header.classList.add(`main-header--scrolled`)
    } else {
      header.classList.remove(`main-header--scrolled`)
    }
  });

  const burger = document.querySelector(`.hamburger`);

  burger.addEventListener(`click`, () => {
    header.classList.toggle(`main-header--active`);
    burger.classList.toggle(`hamburger--active`);
    body.classList.toggle(`site-body--unscrollable`)
  });
}
