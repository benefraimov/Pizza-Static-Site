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
    let pizzaName = document.getElementById('modalPizzaName').textContent;
    cart.push(pizzaName);
    updateCart();
    alert(pizzaName + ' added to cart!');
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
    console.log('Cart:', cart);
}

// Function to update the favorites display
function updateFavorites() {
    // Logic to update favorites UI dynamically (e.g., updating a favorites icon or list)
    console.log('Favorites:', favorites);
}

// Event listeners for modal close and other UI elements
document.querySelector('.close').addEventListener('click', closeModal);

// Example: Simulate cart and favorites display updates
function simulateUIUpdate() {
    // Logic to update the UI based on the cart and favorites arrays
    console.log('Simulating UI updates...');
}

// Initialize page
function init() {
    // Code to initialize the website, like attaching event listeners or loading initial data
    simulateUIUpdate();
}

document.addEventListener('DOMContentLoaded', init);
