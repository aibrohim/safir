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
  responsive: {
    "1920": {
      items: 4,
      fixedWidth: 375
    },
    "1366": {
      items: 4,
      fixedWidth: 305
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
})
