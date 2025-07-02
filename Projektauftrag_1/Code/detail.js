document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id");
  const product = products.find((p) => p.id === productId);

  const pageTitle = document.getElementById("pageTitle");
  const breadcrumbsContainer = document.getElementById("breadcrumbsContainer");
  const productImageEl = document.getElementById("productImage");
  const productNameEl = document.getElementById("productName");
  const productDescriptionEl = document.getElementById("productDescription");
  const productPriceEl = document.getElementById("productPrice");
  const productSizeSelect = document.getElementById("productSize");
  const productNotFoundDiv = document.getElementById("productNotFound");
  const productDetailContentDiv = document.getElementById(
    "productDetailContent"
  );

  if (product) {
    pageTitle.textContent = `${product.name} - Collab Crocs`;
    productNameEl.textContent = product.name;
    productImageEl.src = product.image;
    productImageEl.alt = product.name;
    productDescriptionEl.textContent = product.description;
    productPriceEl.textContent = product.price;

    if (product.breadcrumbs && breadcrumbsContainer) {
      breadcrumbsContainer.innerHTML = "";
      product.breadcrumbs.forEach((crumb, index) => {
        if (index > 0) {
          const separator = document.createElement("span");
          separator.className = "separator";
          separator.textContent = "/";
          breadcrumbsContainer.appendChild(separator);
        }
        if (crumb.link && index < product.breadcrumbs.length - 1) {
          const link = document.createElement("a");
          link.href = crumb.link;
          link.textContent = crumb.name;
          breadcrumbsContainer.appendChild(link);
        } else {
          const span = document.createElement("span");
          span.textContent = crumb.name;
          breadcrumbsContainer.appendChild(span);
        }
      });
    }

    if (product.sizes && product.sizes.length > 0) {
      productSizeSelect.innerHTML = '<option value="">Select Size</option>';
      product.sizes.forEach((size) => {
        const option = document.createElement("option");
        option.value = size;
        option.textContent = size;
        productSizeSelect.appendChild(option);
      });
      productSizeSelect.disabled = false;
      productSizeSelect.required = true;
    } else {
      productSizeSelect.innerHTML =
        '<option value="N/A">Size not applicable</option>';
      productSizeSelect.disabled = true;
      productSizeSelect.required = false;
    }
  } else {
    if (breadcrumbsContainer) breadcrumbsContainer.innerHTML = "";
    if (productDetailContentDiv)
      productDetailContentDiv.classList.add("hidden");
    if (productNotFoundDiv) productNotFoundDiv.classList.add("active");
    if (pageTitle) pageTitle.textContent = "Product Not Found - Collab Crocs";
  }

  const orderForm = document.getElementById("orderForm");
  if (orderForm) {
    orderForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const selectedSize = document.getElementById("productSize").value;
      const quantity = document.getElementById("productQuantity").value;

      if (product && parseInt(quantity) > 0) {
        if (product.sizes && product.sizes.length > 0 && !selectedSize) {
          alert("Please select a size.");
          return;
        }
        let message = `Added ${quantity} of ${product.name}`;
        if (selectedSize && selectedSize !== "N/A" && selectedSize !== "") {
          message += ` (Size: ${selectedSize})`;
        }
        message += ` to bag!`;
        alert(message);
        this.reset();
        if (product.sizes && product.sizes.length > 0) {
          productSizeSelect.value = "";
        } else {
          productSizeSelect.value = "N/A";
        }
        document.getElementById("productQuantity").value = "1";
      } else if (!product) {
        alert("Error: Product details not loaded.");
      } else if (parseInt(quantity) <= 0) {
        alert("Please enter a valid quantity (at least 1).");
      }
    });
  }
});

const mobileMenuButton = document.getElementById("mobileMenuButton");
const mobileMenu = document.getElementById("mobileMenu");
if (mobileMenuButton && mobileMenu) {
  mobileMenuButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
  });
}