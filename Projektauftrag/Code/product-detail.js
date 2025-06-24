const availableSizes = [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46];
const unavailableSizes = [41, 44]; // Beispiel: Diese Größen sind ausverkauft

function getProductIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return parseInt(params.get("id"), 10);
}

function getProductById(id) {
  if (typeof products !== "undefined") {
    return products.find((p) => p.id === id);
  }
  return null;
}

function renderProductDetail() {
  const id = getProductIdFromUrl();
  const product = getProductById(id);
  const section = document.getElementById("productDetailSection");
  if (!product) {
    section.innerHTML = "<p>Produkt nicht gefunden.</p>";
    return;
  }
  // Bildspalte
  const imageCol = section.querySelector(".product-detail-image-col");
  imageCol.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-detail-image-large" onerror="this.onerror=null;this.src='https://via.placeholder.com/500x500?text=Produkt+Bild';">
    `;
  // Infospalte
  const infoCol = section.querySelector(".product-detail-info-col");
  infoCol.innerHTML = `
        <h1>${product.name}</h1>
        <div class="product-detail-info">
            <p>${getLongDescription(product)}</p>
            <p class="price">${product.price.toFixed(2)} CHF</p>
        </div>
        <div class="size-selection" id="sizeSelection">
            ${availableSizes
              .map(
                (size) => `
                <button type="button" class="size-btn" data-size="${size}" ${
                  unavailableSizes.includes(size) ? "disabled" : ""
                }>${size}</button>
            `
              )
              .join("")}
        </div>
        <form class="product-detail-form" id="orderForm">
            <label for="order-quantity">Menge:</label>
            <input type="number" id="order-quantity" name="quantity" min="1" value="1" required>
            <input type="hidden" id="selected-size" name="size" required>
            <button type="submit" class="btn">In den Warenkorb</button>
        </form>
    `;
  // Size Auswahl-Logik
  const sizeBtns = infoCol.querySelectorAll(".size-btn");
  let selectedSize = null;
  sizeBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      sizeBtns.forEach((b) => b.classList.remove("selected"));
      btn.classList.add("selected");
      selectedSize = btn.getAttribute("data-size");
      document.getElementById("selected-size").value = selectedSize;
    });
  });
  // Standardmäßig erste verfügbare Größe auswählen
  const firstAvailable = Array.from(sizeBtns).find((btn) => !btn.disabled);
  if (firstAvailable) {
    firstAvailable.click();
  }
  // Bestellformular-Logik
  document.getElementById("orderForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const qty = parseInt(document.getElementById("order-quantity").value, 10);
    const size = document.getElementById("selected-size").value;
    if (!size) {
      alert("Bitte wählen Sie eine Größe!");
      return;
    }
    for (let i = 0; i < qty; i++) {
      if (typeof addToCart === "function") addToCartWithSize(product.id, size);
    }
    alert("Produkt wurde zum Warenkorb hinzugefügt!");
  });
}

function getLongDescription(product) {
  // Hier kannst du für jedes Produkt eine ausführlichere Beschreibung liefern
  // oder einfach die normale Beschreibung zurückgeben
  return (
    product.description +
    "<br>Material: Croslite™<br>Farbe: Siehe Bild<br>Versand: 1-3 Werktage"
  );
}

function addToCartWithSize(productId, size) {
  const product = products.find((p) => p.id === productId);
  if (product) {
    const key = `${productId}_${size}`;
    let existingItem = cart.find(
      (item) => item.id === productId && item.size === size
    );
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        image: product.image,
        size: size,
      });
    }
    updateCartCount();
    saveCart();
    showCartNotification();
  }
}

document.addEventListener("DOMContentLoaded", renderProductDetail);
