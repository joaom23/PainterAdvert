const translations = {
  en: {
    aboutme: "Hello",
    title: "Ginda | Painter",
  },
  de: {
    aboutme: "Gruzi",
    title: "Ginda | Maler",
  },
  es: {
    aboutme: "Hola",
    title: "Ginda | Pintor",
  },
};

function setLanguage(lang) {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key];
  });
}

document.querySelectorAll("#languageSwitcher button").forEach((btn) => {
  btn.addEventListener("click", () => {
    const lang = btn.getAttribute("data-lang");
    setLanguage(lang);
  });
});

setLanguage("de");
