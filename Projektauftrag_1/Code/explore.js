document.addEventListener("DOMContentLoaded", function () {
  const featuredProductsContainer = document.getElementById(
    "featuredProductsContainer"
  );
  if (featuredProductsContainer) {
    const newProducts = products.filter((p) => p.category.includes("new"));
    (newProducts.length > 0 ? newProducts : products).forEach((product) => {
      const productCard = `
        <a href="detail.html?id=${product.id}" class="product-card featured-product-card">
          <div class="product-image-container">
            <img src="${product.image}" alt="${product.name}">
          </div>
          <div class="product-card-info">
            <p class="product-card-name">${product.name}</p>
            <p class="product-card-price">${product.price}</p>
          </div>
        </a>
      `;
      featuredProductsContainer.innerHTML += productCard;
    });
  }

  var newsletterForm = document.getElementById("newsletterForm");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const emailInput = document.getElementById("newsletterEmail");
      if (emailInput.value && emailInput.checkValidity()) {
        alert("Thank you for subscribing, " + emailInput.value + "!");
        emailInput.value = "";
      } else {
        alert("Please enter a valid email address.");
      }
    });
  }

  const mobileMenuButton = document.getElementById("mobileMenuButton");
  const mobileMenu = document.getElementById("mobileMenu");
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", function () {
      mobileMenu.classList.toggle("active");
    });
  }
});
