document.addEventListener("DOMContentLoaded", function () {
  const addToCartButtons = document.querySelectorAll(".addToCartButton");
  const cartCount = document.getElementById("cartCount");
  const paymentForm = document.getElementById("payment");
  const closePaymentForm = document.querySelector(".close");
  const checkoutButton = document.getElementById("checkoutButton");
  const cartModal = document.getElementById("cartModal");
  const cartModalContent = document.getElementById("cartModalContent");
  const cartIcon = document.getElementById("cartIcon");

  let itemCount = 0;
  const cartItems = []; // Array to store cart items

  addToCartButtons.forEach((button, index) => {
      button.addEventListener("click", function () {
          const item = getItemDetails(index); // Get details of the item being added
          cartItems.push(item); // Add item to the cart
          itemCount++;
          cartCount.innerText = itemCount;
      });
  });

  checkoutButton.addEventListener("click", function () {
      paymentForm.style.display = "block"; // Show payment form
  });

  closePaymentForm.addEventListener("click", function () {
      paymentForm.style.display = "none"; // Hide payment form when close button is clicked
  });

  cartIcon.addEventListener("click", function () {
      cartModal.style.display = "block"; // Show cart modal
      updateCartModalContent(); // Update cart modal content
  });

  const checkoutForm = document.getElementById("checkoutForm");
  checkoutForm.addEventListener("submit", function (event) {
      event.preventDefault();
      // Your form submission logic here
      alert("Checkout successful!");
      itemCount = 0;
      cartCount.innerText = itemCount;
      paymentForm.style.display = "none"; // Hide payment form after successful submission
      cartItems.length = 0; // Clear the cart items array
      updateCartModalContent(); // Update cart modal content
  });

  function getItemDetails(index) {
      // You can implement this function to retrieve item details based on the index
      // For demonstration purposes, we'll return a sample item
      return `Item ${index + 1}`;
  }

  function updateCartModalContent() {
      cartModalContent.innerHTML = ""; // Clear previous content
      if (cartItems.length === 0) {
          const emptyCartMessage = document.createElement("p");
          emptyCartMessage.textContent = "Your cart is empty.";
          cartModalContent.appendChild(emptyCartMessage);
      } else {
          cartItems.forEach(item => {
              const listItem = document.createElement("li");
              listItem.textContent = item;
              cartModalContent.appendChild(listItem);
          });
      }
  }
});
