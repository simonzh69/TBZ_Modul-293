document.addEventListener("DOMContentLoaded", function () {
  const productGrid = document.getElementById("productGrid");
  const productsTitle = document.getElementById("productsTitle");
  const noResultsDiv = document.getElementById("noResults");
  const filterButtons = document.querySelectorAll(".filter-button");
  let currentFilter = "all";
  let currentSearchTerm = "";

  const params = new URLSearchParams(window.location.search);
  const initialFilter = params.get("filter");
  if (initialFilter) {
    currentFilter = initialFilter.toLowerCase();
  }

  function updateActiveButton() {
    filterButtons.forEach((button) => {
      if (button.dataset.filter === currentFilter) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  }

  function displayProducts() {
    productGrid.innerHTML = "";
    const filteredProducts = products.filter((product) => {
      const productCategories = product.category.toLowerCase().split(" ");
      const matchesCategory =
        currentFilter === "all" || productCategories.includes(currentFilter);
      const matchesSearch =
        !currentSearchTerm ||
        product.name.toLowerCase().includes(currentSearchTerm) ||
        product.description.toLowerCase().includes(currentSearchTerm) ||
        productCategories.some((cat) => cat.includes(currentSearchTerm));
      return matchesCategory && matchesSearch;
    });

    if (filteredProducts.length === 0) {
      noResultsDiv.classList.remove("hidden");
    } else {
      noResultsDiv.classList.add("hidden");
    }

    filteredProducts.forEach((product) => {
      const productCard = `
        <a href="detail.html?id=${
          product.id
        }" class="product-card" data-category="${product.category.toLowerCase()}">
          <div class="product-image-container">
            <img src="${product.image}" alt="${product.name}">
          </div>
          <div class="product-card-info">
            <p class="product-card-name">${product.name}</p>
            <p class="product-card-price">${product.price}</p>
          </div>
        </a>
      `;
      productGrid.innerHTML += productCard;
    });

    let titleText = "All Products";
    if (currentFilter !== "all" && currentFilter) {
      titleText = `${
        currentFilter.charAt(0).toUpperCase() + currentFilter.slice(1)
      } Products`;
    }
    productsTitle.textContent = titleText;
    updateActiveButton();
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      currentFilter = this.dataset.filter;
      displayProducts();
    });
  });

  const searchInput = document.getElementById("searchInput");
  const searchInputMobile = document.getElementById("searchInputMobile");
  const searchInputMobileContainer = document.getElementById(
    "searchInputMobileContainer"
  );
  const searchIconMobileButton = document.getElementById(
    "searchIconMobileButton"
  );

  function handleSearch(event) {
    currentSearchTerm = event.target.value.toLowerCase();
    displayProducts();
  }

  if (searchInput) searchInput.addEventListener("input", handleSearch);
  if (searchInputMobile)
    searchInputMobile.addEventListener("input", handleSearch);
  if (searchIconMobileButton && searchInputMobileContainer) {
    searchIconMobileButton.addEventListener("click", function () {
      searchInputMobileContainer.classList.toggle("hidden");
      if (!searchInputMobileContainer.classList.contains("hidden")) {
        searchInputMobile.focus();
      }
    });
  }

  displayProducts();
});

const mobileMenuButton = document.getElementById("mobileMenuButton");
const mobileMenu = document.getElementById("mobileMenu");
if (mobileMenuButton && mobileMenu) {
  mobileMenuButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
  });
}