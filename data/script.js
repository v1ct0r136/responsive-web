fetch('data/menu.json')
    .then(response => {
        return response.json();
    })
    .then(data => {
        const menuContainer = document.getElementById('productos');
        data.forEach(menuItem => {
            const menuItemElement = document.createElement('div');
            menuItemElement.classList.add('card');
            menuItemElement.innerHTML = `
                <div class="first-content">
                    <img class="w-full p-2" src="${menuItem.image}" alt="${menuItem.name}">
                </div>
                <div class="second-content flex items-center flex-col justify-center">
                    <h2>${menuItem.nombre}</h2>
                    <p>${menuItem.ingredientes}</p>
                    <p class="menu-item__price">$${menuItem.precio}</p>
                </div>
            `;
            menuContainer.appendChild(menuItemElement);
        });

        // Aquí empieza la parte interactiva del flip
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.addEventListener('click', function () {
                card.classList.toggle('active');
            });
        });

    })
    .catch(error => {
        console.error('Hubo un error:', error);
    });

const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
menu.classList.toggle("hidden");
});

