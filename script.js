// Function to change the main product image to the source of the clicked thumbnail
function changeImage(clickedThumbnail) {
    const mainImage = document.getElementById('main-image');
    if (mainImage) {
        mainImage.src = clickedThumbnail.src;
    }
}

// Function to adjust the quantity of products
function adjustQuantity(change) {
    const quantityInput = document.getElementById('quantity');
    let quantity = parseInt(quantityInput.value);
    quantity = isNaN(quantity) ? 1 : Math.max(1, quantity + change);
    quantityInput.value = quantity;
}

// Function to add the product to the cart and display a message with details
function addToCart() {
    const sizeSelector = document.querySelector('.size-options select');
    const size = sizeSelector.value;
    const quantity = parseInt(document.getElementById('quantity').value);
    const selectedColorDiv = document.querySelector('.color-option.selected');
    const selectedColor = selectedColorDiv ? selectedColorDiv.style.backgroundColor : 'No color selected';
    const price = parseFloat(document.querySelector('.sale-price').textContent.replace('$', ''));
    const totalPrice = (price * quantity).toFixed(2);
    const message = `Added ${quantity} of size ${size}, color ${selectedColor} to cart. Total price: $${totalPrice}.`;
    alert(message);
}

// Function to calculate discount percentage
function calculateDiscount(originalPrice, salePrice) {
    return Math.round(100 - (salePrice / originalPrice * 100));
}

// Event listeners and DOM interactions
document.addEventListener('DOMContentLoaded', () => {
    // Setup for changing the main product image
    const thumbnails = document.querySelectorAll('.thumbnail-container img');
    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', () => changeImage(thumb));
    });

    // Setup for adjusting quantity
    const quantityDecBtn = document.querySelector('.quantity-btn.decrease');
    const quantityIncBtn = document.querySelector('.quantity-btn.increase');
    if (quantityDecBtn && quantityIncBtn) {
        quantityDecBtn.addEventListener('click', () => adjustQuantity(-1));
        quantityIncBtn.addEventListener('click', () => adjustQuantity(1));
    } else {
        console.error("Quantity buttons not found");
    }

    // Setup for adding to cart
    const addToCartBtn = document.querySelector('.add-to-cart');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', addToCart);
    } else {
        console.error("Add to cart button not found");
    }

    // Manage color option selection
    const colorOptions = document.querySelectorAll('.color-option');
    colorOptions.forEach(option => {
        option.addEventListener('click', () => {
            colorOptions.forEach(opt => opt.classList.remove('selected'));
            option.classList.add('selected');
        });
    });

    // Highlight the first color option as selected by default
    const firstColorOption = document.querySelector('.color-option');
    if (firstColorOption) {
        firstColorOption.classList.add('selected');
    }
});
