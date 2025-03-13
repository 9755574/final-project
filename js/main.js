// Example: Dynamically Update Cart Count
document.addEventListener('DOMContentLoaded', () => {
    const cartCount = document.querySelector('.badge');
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    if (cartCount) {
      cartCount.textContent = cartItems.length;
    }
  });