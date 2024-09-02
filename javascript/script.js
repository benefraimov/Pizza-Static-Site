// JavaScript to handle modals, cart, and favorites

// Global arrays to store cart and favorites
let cart = [];
let favorites = [];

// Function to open a modal with pizza details
function openModal(pizzaName, pizzaImage, pizzaDescription) {
    document.getElementById('modalPizzaName').textContent = pizzaName;
    document.getElementById('modalPizzaImage').src = '../images/pizzas/' + pizzaImage;
    document.getElementById('modalPizzaDescription').textContent = pizzaDescription;
    document.getElementById('pizzaModal').style.display = 'flex';
}

// Function to close the modal
function closeModal() {
    document.getElementById('pizzaModal').style.display = 'none';
}

// Function to add a pizza to the cart
function addToCart() {
    const alertElement = document.getElementById('alert');
    const pElement = document.querySelector('p');

    alertElement.classList.add('alert-out');

    let pizzaName = document.getElementById('modalPizzaName').textContent;
    cart.push(pizzaName);
    updateCart();

    pElement.textContent = pizzaName + ' added to cart!';

    // Show the alert and slide it in
    alertElement.style.display = 'block';
    alertElement.classList.remove('alert-out');
    alertElement.classList.add('alert-in');

    // After 2 seconds, slide out the alert 
    setTimeout(() => {
        alertElement.classList.remove('alert-in');
        alertElement.classList.add('alert-out');

        // Hide the alert after it has slide out 
        setTimeout(() => {
            alertElement.style.display = 'none';
        }, 500);// this timeout matches the css transition duration
    }, 2000);
}

// Function to add a pizza to favorites
function addToFavorites() {
    let pizzaName = document.getElementById('modalPizzaName').textContent;
    if (!favorites.includes(pizzaName)) {
        favorites.push(pizzaName);
        alert(pizzaName + ' added to favorites!');
    } else {
        alert(pizzaName + ' is already in favorites.');
    }
    updateFavorites();
}

// Function to update the cart display
function updateCart() {
    // Logic to update cart UI dynamically (e.g., updating a cart icon or list)
    localStorage.setItem('cart', JSON.stringify(cart))
    console.log('Cart:', cart);
}

// Function to update the favorites display
function updateFavorites() {
    // Logic to update favorites UI dynamically (e.g., updating a favorites icon or list)
    console.log('Favorites:', favorites);
}

// Event listeners for modal close and other UI elements
// document.querySelector('.close').addEventListener('click', closeModal);

// Example: Simulate cart and favorites display updates
function simulateUIUpdate() {
    // Logic to update the UI based on the cart and favorites arrays
    console.log('Simulating UI updates...');
    const cartItems = localStorage.getItem('cart')
    if (cartItems) {
        cartParsed = JSON.parse(cartItems);
        cart.push(cartParsed);
        console.log(cart)
    }
    const cartElement = document.getElementById('cartItems')
    if (cartElement) {
        // Clear the existing content
        cartElement.innerHTML = '';

        // Create a new ul element
        const cartList = document.createElement('ul');

        // Iterate over the cart array and create list items
        cart.forEach((item, index) => {
            // Create a new li element
            const cartItem = document.createElement('li');

            // Set the text content to the current item
            cartItem.textContent = item;

            // Append the li to the ul
            cartList.appendChild(cartItem);
        });

        // Append the ul to the cart element
        cartElement.appendChild(cartList);
    }
}

// Initialize page
function init() {
    // Code to initialize the website, like attaching event listeners or loading initial data
    simulateUIUpdate();
}

document.addEventListener('DOMContentLoaded', init);
