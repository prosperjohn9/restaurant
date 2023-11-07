import { createContactPage } from "./contact.js";
import { createMenuPage } from "./menu.js";

function switchTab(tab) {
  switch (tab) {
      case "home":
        window.location.href = "index.html";  
      break;
    case "contact":
      createContactPage();
      break;
    case "menu":
      createMenuPage();
      break;
    default:
      break;
  }
}

const header = document.createElement("header");

const h1 = document.createElement("h1");
h1.textContent = "HenryFelas Afrika Restoran";
header.appendChild(h1);

const nav = document.createElement("nav");

const homeTab = document.createElement("div");
homeTab.textContent = "Home";
homeTab.classList.add("home-nav");
homeTab.addEventListener("click", () => {
    switchTab("home");
    setActiveTab(homeTab);
});
nav.appendChild(homeTab);

const menuTab = document.createElement("div");
menuTab.textContent = "Menu";
menuTab.classList.add("menu-nav");
menuTab.addEventListener("click", () => {
    switchTab("menu");
    setActiveTab(menuTab);
});
nav.appendChild(menuTab);

const contactTab = document.createElement("div");
contactTab.textContent = "Contact Us";
contactTab.classList.add("contact-nav");
contactTab.addEventListener("click", () => {
    switchTab("contact");
    setActiveTab(contactTab);
});
nav.appendChild(contactTab);

function setActiveTab(tab) {
    const tabs = document.querySelectorAll(".home-nav, .menu-nav, .contact-nav");
    tabs.forEach((tab) => {
        tab.classList.remove("active");
    });
    tab.classList.add("active");
}

header.appendChild(nav);

const main = document.createElement("main");

const contentDiv = document.querySelector("#content");
contentDiv.innerHTML = "";

const image = document.createElement("img");
image.src = "../images/main.jpg";
image.classList.add("home-image");
contentDiv.appendChild(image);

const headLine = document.createElement("h1");
headLine.textContent = "Welcome to HenryFelas Afrikan Restaurant!";
headLine.classList.add("home-h1");
contentDiv.appendChild(headLine);

const copy = document.createElement("p");
copy.textContent = "Experience the finest African cuisines in a cozy and welcoming atmosphere.";
copy.classList.add("home-p1");
contentDiv.appendChild(copy);

const hour = document.createElement("div");
hour.classList.add("hour");
const h2 = document.createElement("h2");
h2.textContent = "Working Hours:";
hour.appendChild(h2);
const p7 = document.createElement("p");
p7.textContent = "Sunday: 11:00 AM - 11:00 PM";
hour.appendChild(p7);
const p1 = document.createElement("p");
p1.textContent = "Monday: 11:00 AM - 10:00 PM";
hour.appendChild(p1);
const p2 = document.createElement("p");
p2.textContent = "Tuesday: 11:00 AM - 10:00 PM";
hour.appendChild(p2);
const p3 = document.createElement("p");
p3.textContent = "Wednesday: 11:00 AM - 10:00 PM";
hour.appendChild(p3);
const p4 = document.createElement("p");
p4.textContent = "Thursday: 11:00 AM - 10:00 PM";
hour.appendChild(p4);
const p5 = document.createElement("p");
p5.textContent = "Friday: 11:00 AM - 11:00 PM";
hour.appendChild(p5);
const p6 = document.createElement("p");
p6.textContent = "Saturday: 11:00 AM - 11:00 PM";
hour.appendChild(p6);
contentDiv.appendChild(hour);

main.appendChild(contentDiv);

const footer = document.createElement("footer");
footer.innerHTML = '&copy; 2023 by ProsperJohn9 <a href="https://github.com/prosperjohn9"><img src="../images/github.svg" alt="github"></a>. All rights reserved.';

const body = document.querySelector("body");
body.appendChild(header);
body.appendChild(main);
body.appendChild(footer);
