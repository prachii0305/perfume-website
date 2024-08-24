const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "AQUATIC PERFUME",
    price: 999,
    colors: [
      {
        code: "black",
        img: "1.png"
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      }
    ],
  },
  {
    id: 2,
    title: "FRUITY PERFUME",
    price: 849,
    colors: [
      {
        code: "lightgray",
        img: "fruity.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "FLORAL PERFUME",
    price: 1000,
    colors: [
      {
        code: "lightgray",
        img: "floral.jpeg",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "ORIENTAL PERFUME",
    price: 799,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      // {
      //   code: "lightgray",
      //   img: "./img/crater2.png",

      // },
    ],
  },
  {
    id: 5,
    title: "WOODY",
    price: 1099,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
const paymentForm = document.getElementById("checkout");
paymentForm.addEventListener("submit", function (event) {
  event.preventDefault();
// Updated ID references
    const nameInput = document.getElementById("name");
    const phoneNumberInput = document.getElementById("phoneNumber");
    const cardNumberInput = document.getElementById("cardNumber");
    const expiryMonthInput = document.getElementById("expiryMonth");
    const expiryYearInput = document.getElementById("expiryYear");
    const cvvInput = document.getElementById("cvv");
  
      // Name validation
    if (nameInput.value.trim() === "") {
        alert('Please enter your name.');
        return;
      }
  
      // Name should not be a number
      if (!isNaN(parseFloat(nameInput.value)) && isFinite(nameInput.value)) {
        alert('Name should not be a number.');
        return;
      }

      // Phone number validation
      if (phoneNumberInput.value.trim().length !== 10 || isNaN(phoneNumberInput.value)) {
        alert('Please enter a valid 10-digit phone number.');
        return;
      }

      // Card number validation
      if (cardNumberInput.value.trim().length !== 16 || isNaN(cardNumberInput.value)) {
        alert('Please enter a valid 16-digit card number.');
        return;
      }
  
      // Expiry month and year validation
      if (!expiryMonthInput.value.match(/^\d{2}$/) || !expiryYearInput.value.match(/^\d{4}$/)) {
        alert('Please enter a valid expiry date.');
        return;
      }
  
      // CVV validation
      if (cvvInput.value.trim().length !== 3 || isNaN(cvvInput.value)) {
        alert('Please enter a valid CVV.');
        return;
      }
  
      // If all validations pass
      else alert('Payment successful!');
      paymentForm.reset();
    });

    document.addEventListener("DOMContentLoaded", function () {
      const guideSteps = document.querySelectorAll(".guideStep");
    
      guideSteps.forEach((step) => {
        step.addEventListener("click", function () {
          step.classList.toggle("expanded");
        });
      });
    });
    
