function createContactPage() {
    const contentDiv = document.querySelector("#content");
    contentDiv.innerHTML = "";

    const contactDiv = document.createElement("div");
    contactDiv.classList.add("contact");
    contentDiv.appendChild(contactDiv);

    const contactTitle = document.createElement("h1");
    contactTitle.textContent = "Contact Us";
    contactDiv.appendChild(contactTitle);
    const contactPhone = document.createElement("p");
    contactPhone.textContent = "Phone: +1 234 567 890";
    contactDiv.appendChild(contactPhone);
    const contactEmail = document.createElement("p");
    contactEmail.textContent = "Email: example@african-restaurant.com";
    contactDiv.appendChild(contactEmail);
    const contactAddress = document.createElement("p");
    contactAddress.textContent = "Contact address: Ardıçlı, Necip Fazil Kisakurek Mah. Gazi Cad. Star Towers Carsi Kapi No :48 Daire No :42, Esenyurt/İstanbul";
    contactDiv.appendChild(contactAddress);
    const contactImage = document.createElement("img");
    contactImage.src = "../images/add.jpg";
    contactDiv.appendChild(contactImage);
}

export { createContactPage };