document.addEventListener("DOMContentLoaded", () => {
    getMenu();
});

let cart = [];

// Fetch and display menu
async function getMenu() {
    try {
        let response = await fetch("https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json");
        let data = await response.json();
        displayMenu(data);
    } catch (error) {
        console.error("Error fetching menu:", error);
    }
}

// Display menu items
function displayMenu(items) {
    let menuContainer = document.getElementById("menu-items");
    menuContainer.innerHTML = "";
    items.forEach(item => {
        let menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");
        menuItem.innerHTML = `
            <img src="${item.imgSrc}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>$${item.price}</p>
            <button class="add-to-cart" onclick="addToCart('${item.name}', ${item.price}, '${item.imgSrc}')">+</button>
        `;
        menuContainer.appendChild(menuItem);
    });
}

// Add to cart function
function addToCart(name, price, imgSrc) {
    cart.push({ name, price, imgSrc });
    console.log("Cart:", cart);
}

// Order functions
function takeOrder() {
    return new Promise(resolve => {
        setTimeout(() => {
            let order = [];
            fetch("https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json")
                .then(res => res.json())
                .then(data => {
                    for (let i = 0; i < 3; i++) {
                        let randomItem = data[Math.floor(Math.random() * data.length)];
                        order.push(randomItem);
                    }
                    resolve(order);
                });
        }, 2500);
    });
}

function orderPrep() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ order_status: true, paid: false });
        }, 1500);
    });
}

function payOrder() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ order_status: true, paid: true });
        }, 1000);
    });
}

function thankyouFnc() {
    alert("Thank you for eating with us today!");
}

// Order Process
document.getElementById("order-btn").addEventListener("click", () => {
    takeOrder()
        .then(order => orderPrep())
        .then(status => payOrder())
        .then(paymentStatus => {
            if (paymentStatus.paid) thankyouFnc();
        })
        .catch(error => console.error("Error processing order:", error));
});
