const siteContent = {
  // DO NOT CHANGE THIS OBJECT
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2021",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log("project wired!");

// Images
const logo = document.querySelector("#logo-img");
const ctaImg = document.querySelector("#cta-img");
const accentImg = document.querySelector("#middle-img");

logo.src = siteContent["images"]["logo-img"];
ctaImg.src = siteContent["images"]["cta-img"];
accentImg.src = siteContent["images"]["accent-img"];

// Nav

const navLinks = document.querySelectorAll("header nav a");

navLinks[0].textContent = siteContent["nav"]["nav-item-1"];
navLinks[1].textContent = siteContent["nav"]["nav-item-2"];
navLinks[2].textContent = siteContent["nav"]["nav-item-3"];
navLinks[3].textContent = siteContent["nav"]["nav-item-4"];
navLinks[4].textContent = siteContent["nav"]["nav-item-5"];
navLinks[5].textContent = siteContent["nav"]["nav-item-6"];

// CTA

const ctaMain = document.querySelector("h1");
const ctaBtn = document.querySelector("button");

ctaMain.textContent = siteContent["cta"]["h1"];
ctaBtn.textContent = siteContent["cta"]["button"];

// Top Content Headers

const topHeader = document.querySelectorAll(".main-content h4");

topHeader[0].textContent = siteContent["main-content"]["features-h4"];
topHeader[1].textContent = siteContent["main-content"]["about-h4"];
topHeader[2].textContent = siteContent["main-content"]["services-h4"];
topHeader[3].textContent = siteContent["main-content"]["product-h4"];
topHeader[4].textContent = siteContent["main-content"]["vision-h4"];

const topPara = document.querySelectorAll(".main-content p");

topPara[0].textContent = siteContent["main-content"]["features-content"];
topPara[1].textContent = siteContent["main-content"]["about-content"];
topPara[2].textContent = siteContent["main-content"]["services-content"];
topPara[3].textContent = siteContent["main-content"]["product-content"];
topPara[4].textContent = siteContent["main-content"]["vision-content"];

// Contact

const contactHeader = document.querySelector(".contact h4");
const contactPara = document.querySelectorAll(".contact p");
console.log(contactPara);

contactHeader.textContent = siteContent["contact"]["contact-h4"];

contactPara[0].textContent = siteContent["contact"]["address"];
contactPara[1].textContent = siteContent["contact"]["phone"];
contactPara[2].textContent = siteContent["contact"]["email"];

// Footer

const footerLink = document.querySelector("footer a");

footerLink.textContent = siteContent["footer"]["copyright"];

// Create class names

navLinks[0].classList.add("italic");
navLinks[1].classList.add("italic");
navLinks[2].classList.add("italic");
navLinks[3].classList.add("italic");
navLinks[4].classList.add("italic");
navLinks[5].classList.add("italic");

footerLink.classList.add("bold");
