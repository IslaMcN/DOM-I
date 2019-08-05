const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
//for button https://developer.mozilla.org/en-US/docs/Archive/Events/checking

const navlinks = document.querySelectorAll("a");
navlinks[0].textContent = siteContent['nav']['nav-item-1'];
navlinks[1].textContent = siteContent['nav']['nav-item-2'];
navlinks[2].textContent = siteContent['nav']['nav-item-3'];
navlinks[3].textContent = siteContent['nav']['nav-item-4'];
navlinks[4].textContent = siteContent['nav']['nav-item-5'];
navlinks[5].textContent = siteContent['nav']['nav-item-6'];
navlinks[0].style.color = 'green';
navlinks[1].style.color='green';
navlinks[2].style.color='green';
navlinks[3].style.color='green';
navlinks[4].style.color='green';
navlinks[5].style.color='green';

const newlink = document.createElement('bottom');
newlink.textContent = 'Hi';
newlink.style.color = 'green';

const alpha = document.createElement('top');
alpha.textContent = 'Hello';
alpha.style.color = 'green';

const navbar = document.querySelector('nav');
navbar.append(newlink);
navbar.prepend(alpha);

const ctastuff = document.querySelectorAll("h1");
ctastuff[0].textContent = siteContent['cta']['h1'];

const fourhead = document.querySelectorAll("h4");
fourhead[0].textContent = siteContent['main-content']['features-h4'];
fourhead[1].textContent = siteContent['main-content']['about-h4'];
fourhead[2].textContent = siteContent['main-content']['services-h4'];
fourhead[3].textContent = siteContent['main-content']['product-h4'];
fourhead[4].textContent = siteContent['main-content']['services-h4'];

const content = document.querySelectorAll("p");
content[0].textContent = siteContent['main-content']['features-content'];
content[1].textContent = siteContent['main-content']['about-content'];
content[2].textContent = siteContent['main-content']['services-content'];
content[3].textContent = siteContent['main-content']['product-content'];
content[4].textContent = siteContent['main-content']['vision-content'];

const middleImg = document.querySelector(".middle-img");
middleImg.setAttribute('src',siteContent['main-content']['middle-img-src']);


fourhead[5].textContent = siteContent['contact']['contact-h4'];
content[5].textContent = siteContent['contact']['address'];
content[6].textContent = siteContent['contact']['phone'];
content[7].textContent = siteContent['contact']['email'];
content[8].textContent = siteContent['footer']['copyright'];

const ctaimg = document.querySelector("#cta-img");
ctaimg.setAttribute('src', siteContent['cta']['img-src']);

const middleimg = document.getElementById("middle-img");

const button = document.querySelector("button");
button.textContent = siteContent['cta']['button'];
button.addEventListener('click', event => {
  button.innerHTML = `Click count: ${event.detail}`;
});

