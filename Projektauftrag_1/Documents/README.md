# Webshop Projekt: Collab Crocs

Dies ist ein Webshop für exklusive Crocs-Kollaborationen. Das Projekt wurde im Rahmen des Moduls 293 erstellt.

**Link zur Seite:** https://taupe-hummingbird-26b767.netlify.app/

**Git-Repository:** https://github.com/simonzh69/TBZ_Modul-293.git

## Projektbeschreibung

Der Webshop verkauft Crocs von Crocs-Collabs und hat ein einfaches, gleichzeitig aber edles und modernes Design. Es basiert auf reinem HTML, CSS und JavaScript.  

## Designprozess

Der visuelle Entwurf des Projekts wurde vor der Umsetzung geplant.

-   **Wireframes (Miro):** [Link zum Miro Board](https://miro.com/welcomeonboard/S0JYUjA0dmszRUNtUmlkT2pwRENYeGtFeHVnMStXZHFBMEk0OEdPU3hvZ1A0UzlwS1pZUzNNUS9qa1VwTDM1ZXhNR2VOVkgyaWtsN0t1UW9IOWdyb1dHN2VnYXdrVXoxUG54UldHaXFTb3NwWlpOMlFEMjZuN1RweDBwWVV4dDdBS2NFMDFkcUNFSnM0d3FEN050ekl3PT0hdjE=?share_link_id=534214743377)
-   **Mockups (Figma):** [Link zum Figma Design](https://www.figma.com/design/1vWpDApHHGkOuF9Iku6xPI/M293-Projektauftrag?node-id=0-1&t=KZtsGPj0DVuU7qzX-1)

## Technologie-Stack

-   HTML5
-   CSS3 (Grid & Flexbox)
-   Vanilla JavaScript

## Dokumentation des KI-Einsatzes

Ich habe KI-Tools (primär Google AI Studio und den Cursor Editor) als Entwicklungspartner genutzt. Meine Vorgehensweise war, grosse Aufgaben mit detaillierten Prompts an die KI zu delegieren und die Ergebnisse anschliessend manuell zu testen und zu verfeinern.

### 1. KI-Prompts zur Generierung der Seiten

Hier sind die zentralen Prompts, die ich verwendet habe, um die Basis jeder Seite zu erstellen. Als Kontext habe ich der KI immer meine Figma-Mockups und die bestehende Projektstruktur zur Verfügung gestellt.

---

#### **Prompt für die Startseite (Explore Page)**

> **Task:** Create the complete code for the **Explore Page (Homepage)** of the 'Collab Crocs' website.
>
> **Page Description:** This is the main landing page. It should be visually engaging and guide users to key areas of the site. It features a large hero section, a carousel for new products, a grid for categories, and a newsletter signup form. The design must be modern, dark-themed, and responsive.
>
> **Requirements:**
> 1.  **HTML (`explore.html`):** Create the structure including a `<header>`, `<main>`, and `<footer>`. The main section must contain:
>     -   A full-width hero section with a background image, a heading, and a "Shop All" button.
>     -   A "New Products" section with a horizontally scrollable container with the ID `featuredProductsContainer`.
>     -   A "Shop by Category" section with a 3-column responsive grid for category links.
>     -   A newsletter form with the ID `newsletterForm`.
> 2.  **CSS (`style.css` & `explore.css`):** Use pure CSS without frameworks. Global styles (header, footer, buttons) go into `style.css`. Page-specific styles for the hero section and category grid go into `explore.css`. The layout must adapt from a single column on mobile to a multi-column layout on desktop, as per the mockup.
> 3.  **JavaScript (`explore.js`):** Write a script to dynamically load products from `products.js` (only those with category 'new') into the `#featuredProductsContainer`. Add an event listener to `#newsletterForm` to show an alert on submit. Implement the mobile menu toggle.

---

#### **Prompt für die Produktübersicht (Index Page)**

> **Task:** Create the complete code for the **Index Page (Product Listing Page)**.
>
> **Page Description:** This page displays all products in a grid. Users must be able to filter these products by category and search for them. The layout should be clean and functional, allowing for easy browsing.
>
> **Requirements:**
> 1.  **HTML (`index.html`):** Structure the page with a header, a filter bar, a product grid container with the ID `productGrid`, and a footer. The filter bar should contain buttons with `data-filter` attributes.
> 2.  **CSS (`style.css` & `index.css`):** Use pure CSS. Page-specific styles for the filter bar and the responsive product grid (2 columns on mobile, 4 on desktop) go into `index.css`.
> 3.  **JavaScript (`index.js`):** Write a script to:
>     -   Dynamically render all products from `products.js` into `#productGrid`.
>     -   Implement a filter logic that listens to clicks on `.filter-button` and re-renders the grid.
>     -   Implement a live search that filters products based on input from `#searchInput` and `#searchInputMobile`.
>     -   Handle the mobile menu and mobile search bar visibility.

---

#### **Prompt für die Produktdetailseite (Detail Page)**

> **Task:** Create the complete code for the **Product Detail Page**.
>
> **Page Description:** This page provides detailed information about a single, specific product. It features a two-column layout on desktop (image and info side-by-side) and a stacked layout on mobile. The user can select a size and quantity to order.
>
> **Requirements:**
> 1.  **HTML (`detail.html`):** The structure must include a breadcrumbs container and a main content area. Use specific IDs like `#productImage`, `#productName`, `#productPrice`, `#productDescription`, and an order form with the ID `orderForm`.
> 2.  **CSS (`style.css` & `detail.css`):** Use pure CSS. Page-specific styles for the two-column layout and product typography go into `detail.css`.
> 3.  **JavaScript (`detail.js`):** Write a script that:
>     -   Reads a product ID from the URL query parameter (`?id=...`).
>     -   Finds the matching product in the `products.js` array.
>     -   Dynamically populates all HTML elements (image, name, price, etc.) with the product's data.
>     -   Populates the size dropdown (`#productSize`) with the product's available sizes.
>     -   Handles the `#orderForm` submission with a confirmation alert.

---

#### **Prompt für die Kontaktseite (Contact Page)**

> **Task:** Create the complete code for the **Contact Page**.
>
> **Page Description:** This is a simple, professional page for user inquiries. It includes information about the team and a functional contact form. The layout should be clean and easy to navigate.
>
> **Requirements:**
> 1.  **HTML (`contact.html`):** Structure the page to include:
>     -   A title and an introduction.
>     -   An "Our Team" section with a simple grid for team member cards.
>     -   A contact form with the ID `contactForm`, containing fields for Name, Email, a Subject dropdown, and a Message textarea.
> 2.  **CSS (`style.css` & `contact.css`):** Use pure CSS. Page-specific styles for the team grid and the form layout go into `contact.css`.
> 3.  **JavaScript (`contact.js`):** Add an event listener to `#contactForm` to validate the fields and show a confirmation alert on submit. Implement the mobile menu toggle.

---

### 2. Manuelle Überarbeitung und Korrekturen

Der von der KI generierte Code war eine gute Basis, erforderte aber manuelle Nacharbeit. Ich habe jede Ausgabe getestet und Fehler korrigiert. Manchmal habe ich die KI mit präzisen Prompts zur Fehlerbehebung genutzt, manchmal habe ich die Fehler direkt im Code behoben. Dieser iterative Prozess aus KI-Generierung und manueller Kontrolle war entscheidend für die Qualität des Endprodukts.

## Setup

Um das Projekt lokal auszuführen:
1.  Klone das Repository.
2.  Öffne eine der `.html`-Dateien (z.B. `explore.html`) in deinem Webbrowser oder verwende einen Live-Server.