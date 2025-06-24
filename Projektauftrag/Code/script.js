const products = [
  {
    id: 1,
    name: "Crocs x Post Malone",
    price: 129.99,
    description: "Limited Edition Collaboration mit Post Malone - Pollex Clog",
    category: "artist",
    image: "../pictures/post-malone-corcs.png",
    featured: true,
  },
  {
    id: 2,
    name: "Crocs x Balenciaga",
    price: 299.99,
    description: "Exklusive Kooperation mit Balenciaga - Platform Clog",
    category: "brand",
    image: "../pictures/balenciaga-crocs.png",
    featured: true,
  },
  {
    id: 3,
    name: "Crocs x Justin Bieber",
    price: 149.99,
    description: "Drew House Collaboration - Classic Clog",
    category: "artist",
    image: "../pictures/bieber-crocs.png",
    featured: true,
  },
  {
    id: 4,
    name: "Crocs x Salehe Bembury",
    price: 199.99,
    description: "Limited Edition Pollex Clog - Urchin",
    category: "limited",
    image: "../pictures/salehe-crocs.png",
    featured: false,
  },
  {
    id: 5,
    name: "Crocs x Bad Bunny",
    price: 169.99,
    description: "Exklusive Bad Bunny Edition - Classic Clog",
    category: "artist",
    image: "../pictures/bad-bunny-crocs.png",
    featured: false,
  },
  {
    id: 6,
    name: "Crocs x KFC",
    price: 89.99,
    description: "Limited Edition KFC Collaboration - Classic Clog",
    category: "brand",
    image: "../pictures/kfc-crocs.png",
    featured: false,
  },
  {
    id: 7,
    name: "Crocs x Beams",
    price: 119.99,
    description: "Japanische Streetwear Collaboration - Classic Clog",
    category: "brand",
    image: "../pictures/beams-crocs.png",
    featured: false,
  },
  {
    id: 8,
    name: "Crocs x Liberty",
    price: 99.99,
    description: "Limited Edition Liberty Print - Classic Clog",
    category: "limited",
    image: "../pictures/liberty-crocs.png",
    featured: false,
  },
  {
    id: 9,
    name: "Crocs x Alife",
    price: 109.99,
    description: "Streetwear Collaboration - Classic Clog",
    category: "brand",
    image: "../pictures/alife-crocs.png",
    featured: false,
  },
  {
    id: 10,
    name: "Crocs x Hidden NY",
    price: 139.99,
    description: "Limited Edition Hidden NY Collaboration",
    category: "limited",
    image: "../pictures/hidden-ny-crocs.png",
    featured: false,
  },
];

let cart = [];

function displayProducts(containerId = "productGrid", filterCategory = "all") {
  const container = document.getElementById(containerId);
  if (!container) return;

  const filteredProducts =
    filterCategory === "all"
      ? products
      : products.filter((product) => product.category === filterCategory);

  container.innerHTML = "";

  filteredProducts.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";
    productCard.innerHTML = `
      <a href="product-detail.html?id=${product.id}" class="product-link">
        <div class="product-image-container">
          <img src="${product.image}" 
               alt="${product.name}" 
               onerror="this.onerror=null; this.src='https://via.placeholder.com/300x300?text=Produkt+Bild'; this.classList.add('error-image');"
               loading="lazy">
        </div>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p class="price">${product.price.toFixed(2)} CHF</p>
      </a>
      <button class="btn" onclick="addToCart(${
        product.id
      }); event.stopPropagation();">In den Warenkorb</button>
    `;
    container.appendChild(productCard);
  });
}

function displayFeaturedProducts() {
  const featuredProducts = products.filter((product) => product.featured);
  displayProducts("featuredProducts", "all");
}

function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  if (product) {
    const existingItem = cart.find((item) => item.id === productId);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        image: product.image,
      });
    }
    updateCartCount();
    saveCart();
    showCartNotification();
  }
}

function showCartNotification() {
  const notification = document.createElement("div");
  notification.className = "cart-notification";
  notification.textContent = "Produkt wurde zum Warenkorb hinzugefügt";
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 2000);
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  updateCartCount();
  saveCart();
  displayCart();
}

function updateCartCount() {
  const cartCount = document.getElementById("cart-count");
  if (cartCount) {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
  }
}

function displayCart() {
  const cartItems = document.getElementById("cartItems");
  const totalAmount = document.getElementById("totalAmount");
  if (!cartItems || !totalAmount) return;

  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item) => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";
    cartItem.innerHTML = `
      <div class="cart-item-image">
        <img src="${item.image}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/100x100?text=Produkt+Bild'">
      </div>
      <div class="cart-item-details">
        <h4>${item.name}</h4>
        <p>${item.price.toFixed(2)} CHF x ${item.quantity}</p>
      </div>
      <div class="cart-item-total">
        <p>${itemTotal.toFixed(2)} CHF</p>
        <button class="btn" onclick="removeFromCart(${item.id})">Entfernen</button>
      </div>
    `;
    cartItems.appendChild(cartItem);
  });

  totalAmount.textContent = total.toFixed(2);
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function loadCart() {
  const savedCart = localStorage.getItem("cart");
  if (savedCart) {
    cart = JSON.parse(savedCart);
    updateCartCount();
    displayCart();
  }
}

function handleNewsletterSubmit(event) {
  event.preventDefault();
  const email = event.target.querySelector('input[type="email"]').value;
  alert(`Vielen Dank für Ihre Newsletter-Anmeldung mit der E-Mail: ${email}`);
  event.target.reset();
}

function handleContactSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries());
  alert(
    "Vielen Dank für Ihre Nachricht. Wir werden uns in Kürze bei Ihnen melden."
  );
  event.target.reset();
}

function displayNewRelease() {
  const newReleaseSection = document.getElementById("new-release");
  if (!newReleaseSection) return;
  // Für Demo: Nimm das erste Produkt als "neu"
  const newProduct = products[0];
  newReleaseSection.innerHTML = `
    <span class="new-release-badge">NEU</span>
    <img src="${newProduct.image}" alt="${
    newProduct.name
  }" class="new-release-image" onerror="this.onerror=null;this.src='https://via.placeholder.com/340x340?text=Produkt+Bild';">
    <div class="new-release-info">
      <div class="new-release-title">Jetzt neu: ${newProduct.name}</div>
      <div class="new-release-desc">${newProduct.description}</div>
      <div class="new-release-price">${newProduct.price.toFixed(2)} CHF</div>
      <a href="product-detail.html?id=${
        newProduct.id
      }" class="new-release-btn">Zum Produkt</a>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  loadCart();
  displayNewRelease();
  displayFeaturedProducts();

  const categoryFilter = document.getElementById("category-filter");
  if (categoryFilter) {
    categoryFilter.addEventListener("change", (e) => {
      displayProducts("productGrid", e.target.value);
    });
  }

  const newsletterForm = document.getElementById("newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", handleNewsletterSubmit);
  }

  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", handleContactSubmit);
  }
});
