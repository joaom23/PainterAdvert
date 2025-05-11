const translations = {
  de: {
    businessName: "Malerfirma",
    tagline: "Professionelle Malerarbeiten für Ihr Zuhause",
    navAbout: "Über mich",
    navServices: "Leistungen",
    navProjects: "Projekte",
    navContact: "Kontakt",
    heroTitle: "Ihr Zuhause in besten Händen",
    heroText:
      "Wir bieten hochwertige Malerarbeiten für Innen- und Außenbereiche.",
    heroButton: "Kontaktieren Sie uns",
    aboutTitle: "Über mich",
    aboutText:
      "Hallo, ich bin Petrica, ein Maler mit 17 Jahren Erfahrung in der Branche. Ich habe eine Leidenschaft dafür, Räume und Objekte mit meiner Arbeit zu verwandeln. Ich verfüge über Fähigkeiten in Malerei, Dekoration und Restaurierung. Ich spezialisiere mich auf glatte Oberflächen, wie das Streichen von Wänden, Decken, Möbeln, Türen, Fenstern, Fassaden usw.",
    servicesTitle: "Unsere Leistungen",
    service1Title: "Innen- und Außenanstrich",
    service1Text:
      "Ich biete Innen- und Außenanstrichdienste für Häuser, Büros und Gewerbeflächen an.",
    service2Title: "Farbberatung und Design",
    service2Text:
      "Ich kann Ihnen helfen, die perfekten Farben und Designs für Ihren Raum auszuwählen.",
    service3Title: "Restaurierung und Reparatur",
    service3Text:
      "Ich biete auch Restaurierungs- und Reparaturdienste für gestrichene Oberflächen an.",
    projectsTitle: "Unsere Projekte",
    project1Alt: "Projekt 1",
    project2Alt: "Projekt 2",
    project3Alt: "Projekt 3",
    contactTitle: "Kontakt",
    emailLabel: "E-Mail:",
    instagramText: "Instagram",
    facebookText: "Facebook",
    flagDe: "Deutsch",
    flagEn: "Englisch",
    flagEs: "Spanisch",
    switchToDe: "Zu Deutsch wechseln",
    switchToEn: "Zu Englisch wechseln",
    switchToEs: "Zu Spanisch wechseln",
    siteTitle: "Ginda | Maler",
    companyLogoAlt: "Firmenlogo",
    petricaPhotoAlt: "Foto von Petrica",
  },
  en: {
    businessName: "Painting Company",
    tagline: "Professional Painting Services for Your Home",
    navAbout: "About Me",
    navServices: "Services",
    navProjects: "Projects",
    navContact: "Contact",
    heroTitle: "Your Home in the Best Hands",
    heroText:
      "We offer high-quality painting services for interiors and exteriors.",
    heroButton: "Contact Us",
    aboutTitle: "About Me",
    aboutText:
      "Hello, I am Petrica, a painting professional with 17 years of experience in the industry. I am passionate about transforming spaces and objects with my work. I have skills in painting, decoration, and restoration. I specialize in smooth finishes, such as painting walls, ceilings, furniture, doors, windows, facades, etc.",
    servicesTitle: "Our Services",
    service1Title: "Interior and Exterior Painting",
    service1Text:
      "I offer interior and exterior painting services for homes, offices, and commercial spaces.",
    service2Title: "Color Consultation and Design",
    service2Text:
      "I can help you choose the perfect colors and designs for your space.",
    service3Title: "Restoration and Repair",
    service3Text:
      "I also offer restoration and repair services for painted surfaces.",
    projectsTitle: "Our Projects",
    project1Alt: "Project 1",
    project2Alt: "Project 2",
    project3Alt: "Project 3",
    contactTitle: "Contact",
    emailLabel: "Email:",
    instagramText: "Instagram",
    facebookText: "Facebook",
    flagDe: "German",
    flagEn: "English",
    flagEs: "Spanish",
    switchToDe: "Switch to German",
    switchToEn: "Switch to English",
    switchToEs: "Switch to Spanish",
    siteTitle: "Ginda | Painter",
    companyLogoAlt: "Company Logo",
    petricaPhotoAlt: "Photo of Petrica",
  },
  es: {
    businessName: "Empresa de Pintura",
    tagline: "Servicios Profesionales de Pintura para su Hogar",
    navAbout: "Sobre Mí",
    navServices: "Servicios",
    navProjects: "Proyectos",
    navContact: "Contacto",
    heroTitle: "Su Hogar en las Mejores Manos",
    heroText:
      "Ofrecemos servicios de pintura de alta calidad para interiores y exteriores.",
    heroButton: "Contáctenos",
    aboutTitle: "Sobre Mí",
    aboutText:
      "Hola, soy Petrica, un oficial de pintura con 17 años de experiencia en la industria. Me apasiona transformar espacios y objetos con mi trabajo. Tengo habilidades en pintura, decoración y restauración. Me especializo en lisos, como pintura de paredes, techos, muebles, puertas, ventanas fachadas etc.",
    servicesTitle: "Nuestros Servicios",
    service1Title: "Pintura de Interiores y Exteriores",
    service1Text:
      "Ofrezco servicios de pintura de interiores y exteriores para hogares, oficinas y espacios comerciales.",
    service2Title: "Decoración y Diseño",
    service2Text:
      "Puedo ayudarte a elegir los colores y diseños perfectos para tu espacio.",
    service3Title: "Restauración y Reparación",
    service3Text:
      "También ofrezco servicios de restauración y reparación de superficies pintadas.",
    projectsTitle: "Nuestros Proyectos",
    project1Alt: "Proyecto 1",
    project2Alt: "Proyecto 2",
    project3Alt: "Proyecto 3",
    contactTitle: "Contacto",
    emailLabel: "Correo electrónico:",
    instagramText: "Instagram",
    facebookText: "Facebook",
    flagDe: "Alemán",
    flagEn: "Inglés",
    flagEs: "Español",
    switchToDe: "Cambiar a Alemán",
    switchToEn: "Cambiar a Inglés",
    switchToEs: "Cambiar a Español",
    siteTitle: "Ginda | Pintor",
    companyLogoAlt: "Logotipo de la empresa",
    petricaPhotoAlt: "Foto de Petrica",
  },
};

function setLanguage(lang) {
  document.querySelectorAll("[data-key]").forEach((element) => {
    const key = element.getAttribute("data-key");
    if (element.tagName === "IMG") {
      element.alt = translations[lang][key];
    } else {
      element.textContent = translations[lang][key];
    }
  });
  document.querySelectorAll(".language-selector button").forEach((button) => {
    const ariaKey = button.getAttribute("data-aria-key");
    button.setAttribute("aria-label", translations[lang][ariaKey]);
    if (button.getAttribute("data-lang") === lang) {
      button.classList.add("selected");
    } else {
      button.classList.remove("selected");
    }
  });
  localStorage.setItem("preferredLang", lang);

  document.title = translations[lang].siteTitle;
}

let initialLang = localStorage.getItem("preferredLang");
if (!initialLang) {
  const userLang = navigator.language || navigator.userLanguage;
  initialLang = "de";
  if (userLang.startsWith("en")) initialLang = "en";
  else if (userLang.startsWith("es")) initialLang = "es";
}
setLanguage(initialLang);

document.querySelectorAll(".language-selector button").forEach((button) => {
  button.addEventListener("click", function () {
    const lang = this.getAttribute("data-lang");
    setLanguage(lang);
  });
});

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const captionText = document.getElementById("caption");
const closeBtn = document.querySelector(".close");

document.querySelectorAll("#projects img").forEach((img) => {
  img.addEventListener("click", function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerText = this.alt;
  });
});

closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

modal.addEventListener("click", function (e) {
  if (e.target !== modalImg) {
    modal.style.display = "none";
  }
});
