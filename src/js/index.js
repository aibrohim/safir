const LANG_TOGGLER = document.querySelector(`.lang__toggler`);
const LANG_LIST = document.querySelector(`.lang__list`);

LANG_TOGGLER.addEventListener(`click`, () => {
  LANG_LIST.classList.toggle(`lang__list--open`);
});

var slider = tns();
