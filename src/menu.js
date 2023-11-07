function createMenuPage() {
    const contentDiv = document.querySelector("#content");
    contentDiv.innerHTML = "";

    const menuDiv = document.createElement("div");
    menuDiv.classList.add("menu");
    contentDiv.appendChild(menuDiv);

    const menuItems = [
        {
            name: "Jollof Rice",
            image: "../images/item1.jpg",
            description: "Tomato based rice mixed with onions served with a side of fried plantains, veggies and choice of chicken, beef, fish, goat meat or pork.",
            price: "800.00₺",
        },
        {
            name: "Fried Rice",
            image: "../images/item2.jpg",
            description: "Stir-fried rice mixed with ingredients such as vegetables, shrimp or chicken served with fried plantains and choice of chicken, beef, fish, goat meat or pork.",
            price: "1200.00₺",
        },
        {
            name: "White Rice and Stew",
            image: "../images/item3.jpg",
            description: "A delicious tomato-based stew served over white parboiled rice with choice of chicken, beef, fish, goat meat or pork.",
            price: "600.00₺",
        },
        {
            name: "Bitter Leaf Soup",
            image: "../images/item4.jpg",
            description: "Delighted soup cooked with bitter leaves, assorted meats, stock fish and smoked fish, and boiled mashed cocoyam.",
            price: "1500.00₺",
        },
        {
            name: "Egusi Soup",
            image: "../images/item5.jpg",
            description: "A delectable soup thickened with grounded egusi seeds and fried with palm oil.",
            price: "1200.00₺",
        },
        {
            name: "Ogbono Soup",
            image: "../images/item6.jpg",
            description: "Delicious soup thickened with ground ogbono seeds.",
            price: "900.00₺",
        },
        {
            name: "Edikaikong Soup",
            image: "../images/item7.jpg",
            description: "A lively dish made from a variety of indigenous leafy green vegetables.",
            price: "1500.00₺",
        },
        {
            name: "Afang Soup",
            image: "../images/item8.jpg",
            description: "Slimy-textured soup loaded with chunks of protein, spices and seasonings; prepared with Spinach and the wild herbal Afang leaves (Okazi).",
            price: "1800.00₺",
        },
        {
            name: "White Soup",
            image: "../images/item9.jpg",
            description: "Ofe Nsala",
            price: "1500.00₺",
        },
        {
            name: "Catfish Pepper Soup",
            image: "../images/item10.jpg",
            description: "",
            price: "900.00₺",
        },
        {
            name: "Suya",
            image: "../images/item11.jpg",
            description: "Thinly sliced beef seasoned with spices and grilled to perfection. Served with choice of Keobi's seasoning or traditional suya seasoning and onions.",
            price: "900.00₺",
        },
        {
            name: "Peppered Goat Meat",
            image: "../images/item12.jpg",
            description: "Goat Meat sauteed with onions and peppers.",
            price: "900.00₺",
        }
    ];

    menuItems.forEach(item => {
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");
        menuDiv.appendChild(menuItem);

        const image = document.createElement("img");
        image.src = item.image;
        image.alt = item.name;
        menuItem.appendChild(image);

        const title = document.createElement("h2");
        title.textContent = item.name;
        menuItem.appendChild(title);

        const description = document.createElement("p");
        description.textContent = item.description;
        menuItem.appendChild(description);

        const price = document.createElement("h3");
        price.textContent = item.price;
        menuItem.appendChild(price);
    });
}

export { createMenuPage };