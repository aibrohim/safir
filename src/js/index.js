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

(async () => {
  const instaData = await fetch(`https://graph.facebook.com/v10.0/instagram_oembed?url=https://www.instagram.com/p/CM_9xHbJtZM/`)
  await console.log(instaData);
})();
