# Webshop Projekt: Collab Crocs

Dies ist ein Webshop für exklusive Crocs-Kollaborationen, erstellt im Rahmen des Projektauftrags "Webshop mit KI-gestützter Webentwicklung".

**Live-Demo:** [https://taupe-hummingbird-26b767.netlify.app/](https://taupe-hummingbird-26b767.netlify.app/)
**Git-Repository:** [https://github.com/simonzh69/TBZ_Modul-293.git](https://github.com/simonzh69/TBZ_Modul-293.git)

## Projektbeschreibung

Der "Collab Crocs" Webshop ist eine Plattform für limitierte Crocs-Kollaborationen. Die Seite hat ein modernes, dunkles Design und wurde komplett ohne CSS-Frameworks wie Bootstrap oder Tailwind erstellt. Alle dynamischen Funktionen, wie die Produktfilterung, werden von reinem JavaScript gesteuert.

## Designprozess und Wireframes

Bevor ich mit dem Coden anfing, habe ich das Design genau geplant. Der Prozess folgte einem klaren Weg vom Groben zum Detail:

1.  **Wireframes (Miro):** Zuerst habe ich in Miro einfache Skizzen (Wireframes) erstellt, um die grundlegende Struktur und Anordnung der Elemente für jede Seite und für verschiedene Bildschirmgrössen (Mobile, Desktop) festzulegen. [Link zum Miro Board](https://miro.com/welcomeonboard/S0JYUjA0dmszRUNtUmlkT2pwRENYeGtFeHVnMStXZHFBMEk0OEdPU3hvZ1A0UzlwS1pZUzNNUS9qa1VwTDM1ZXhNR2VOVkgyaWtsN0t1UW9IOWdyb1dHN2VnYXdrVXoxUG54UldHaXFTb3NwWlpOMlFEMjZuN1RweDBwWVV4dDdBS2NFMDFkcUNFSnM0d3FEN050ekl3PT0hdjE=?share_link_id=534214743377)

2.  **Mockups (Figma):** Basierend auf den Wireframes habe ich in Figma detaillierte, farbige Entwürfe (Mockups) erstellt. Diese dienten als visuelle Vorlage für die finale Umsetzung. [Link zum Figma Design](https://www.figma.com/design/1vWpDApHHGkOuF9Iku6xPI/M293-Projektauftrag?node-id=0-1&t=KZtsGPj0DVuU7qzX-1)

## Styleguide

### Farben
-   **Hintergrund (Main):** `#181111`
-   **Hintergrund (Sekundär):** `#261c1c`
-   **Interaktive Elemente:** `#382929`
-   **Akzentfarbe (Primär):** `#e92932`
-   **Text (Primär):** `#FFFFFF`
-   **Text (Sekundär):** `#b89d9f`

### Typografie
-   **Schriftarten:** 'Be Vietnam Pro', 'Noto Sans'
-   **Überschriften:** `font-weight: 700` oder `900`
-   **Fliess-text:** `font-weight: 400`

## Technologie-Stack

-   HTML5
-   CSS3 (Grid & Flexbox)
-   Vanilla JavaScript

## Dokumentation des KI-Einsatzes

Mein Workflow basierte auf einem iterativen Prozess mit verschiedenen KI-Tools. Ich habe grosse, detaillierte Prompts verwendet, um eine solide Code-Basis zu generieren. Diese habe ich anschliessend manuell und mit Hilfe kleinerer, gezielter Prompts getestet, verfeinert und korrigiert.

### Vergleich und Auswahl der genutzten KI-Tools

-   **Google AI Studio:** Meine erste Wahl für die Erstellung der ursprünglichen Code-Basis wegen des grossen Kontextfensters.
-   **Cursor:** Das ideale Werkzeug für das Finetuning und Debugging direkt im Code.
-   **GitHub Copilot:** Hauptsächlich als "Autovervollständigung" für sich wiederholende Code-Blöcke genutzt.

**Mein finaler Workflow:** Die Kombination aus **Google AI Studio** für den grossen Entwurf und **Cursor** für die iterative Verfeinerung erwies sich als die produktivste Methode.

---

### Prompts zur Seitenerstellung und nachfolgende Anpassungen

Hier sind die zentralen Prompts, die ich in **Google AI Studio** verwendet habe. Als Kontext habe ich der KI immer ein Bild meines Figma-Mockups für die jeweilige Seite zur Verfügung gestellt.

#### **1. Haupt-Prompt: Explore Page (Homepage)**

"Act as a senior frontend developer. Generate the complete code for the Homepage of the 'Collab Crocs' website, based on the provided mockup image. The code must be organized into separate HTML, CSS, and JavaScript files. You must only use pure HTML, CSS (Flexbox & Grid), and vanilla JavaScript, with no external frameworks. The page must include a reusable global header and footer.

Page Structure and Content:
The page should be structured with a header, a main content area, and a footer. The main content must contain these sections in order: a full-width hero section with a large background image, a main headline "Explore the Latest in Collab Crocs", a sub-headline, and a primary button "Shop All Collections". It must also have a "New Products" section with a title and a container that will be filled with products by JavaScript. On mobile, this container must be horizontally scrollable. Another section, "Shop by Category", should be a responsive grid with three clickable cards: "Designer Collabs", "Limited Editions", and "Artist Series". Finally, include a newsletter subscription form at the bottom of the page.

Functionality:
The "New Products" section must be dynamic. The script needs to get product data from an external `products.js` file and show only products categorized as 'new'. The newsletter form must be functional and show a confirmation alert on submission, without reloading the page. The mobile navigation menu must be fully functional.

Design and Styling:
The visual design must strictly adhere to the provided mockup. The CSS should use CSS variables for the color palette.
-   Main Background: `#181111`
-   Secondary Background (for cards, containers): `#261c1c`
-   Interactive Elements (inputs, buttons idle state): `#382929`
-   Primary Accent (main buttons, active links, highlights): `#e92932`
-   Primary Text (headlines, main copy): `#FFFFFF`
-   Secondary Text (sub-headlines, placeholders): `#b89d9f`
The primary fonts are 'Be Vietnam Pro' and 'Noto Sans'. Headings must be bold (font-weight 700 or 900), and body text regular (font-weight 400). The layout must be fully responsive, transitioning from a single-column on mobile to a multi-column design on desktop."

**Anpassungen nach der Generierung:**
-   **Problem:** Das "New Products"-Karussell war auf mobilen Geräten nicht horizontal scrollbar.
-   **Lösung (Manuell):** Ich habe dem Container manuell `overflow-x: auto;` hinzugefügt.
-   **Problem:** Das mobile Menü funktionierte nicht.
-   **Lösung (mit Cursor):** Ich gab den Prompt ein: *"The mobile menu does not open when the hamburger button is clicked. Here is the relevant HTML and JS. Find the error and fix it."* Die KI korrigierte den Event-Listener.

---

#### **2. Haupt-Prompt: Index Page (Produktübersicht)**

"Act as a senior frontend developer. Generate the complete code for the Product Listing Page of the 'Collab Crocs' website, based on the provided mockup. The code must be organized into separate HTML, CSS, and JavaScript files and use only pure HTML, CSS, and vanilla JS.

Page Goal & Structure:
The page must serve as the main product catalog. It needs a global header and footer. The main content should include a dynamic title, a filter bar with category buttons, a responsive product grid, and dedicated search input fields for both mobile and desktop views.

Functionality:
The script must dynamically render all product cards from `products.js`. The grid must instantly update when a user clicks a filter button, and the active button must be visually highlighted. A live search must filter products in real-time as a user types. The filter and search functions must work in combination. The page must also be able to read a filter parameter from the URL on initial load and apply it automatically. If no products match the criteria, a clear "No products found" message should be displayed.

Design and Styling:
The design must match the mockup. The product grid must be responsive (2 columns on mobile, up to 4 on desktop). The active filter button must be styled with the primary accent color `#e92932`. Use the established dark theme and style guide for all colors and fonts:
-   Main Background: `#181111`
-   Secondary Background: `#261c1c`
-   Interactive Elements: `#382929`
-   Primary Accent: `#e92932`
-   Primary Text: `#FFFFFF`
-   Secondary Text: `#b89d9f`
-   Fonts: 'Be Vietnam Pro', 'Noto Sans'."

**Anpassungen nach der Generierung:**
-   **Problem:** Die Kombination aus Filter und Suche war fehlerhaft.
-   **Lösung (mit Cursor):** Ich habe die zuständige Funktion markiert und den Prompt eingegeben: *"Refactor this logic. The search filter should always be applied *after* the category filter, not on the original full list of products."*
-   **Problem:** Das Layout der Filter-Buttons war auf kleinen Bildschirmen überladen.
-   **Lösung (Manuell):** Ich habe manuell CSS-Klassen hinzugefügt, um weniger wichtige Filter auf kleinen Bildschirmen auszublenden.

---

#### **3. Haupt-Prompt: Detail Page (Produkt)**

"Act as a senior frontend developer. Generate the complete code for the Product Detail Page, based on the provided mockup. Organize the code into separate HTML, CSS, and JavaScript files, using only pure web technologies.

Page Goal & Structure:
The page must display all relevant information for a single product. It needs a global header and footer. The main content should contain a breadcrumbs navigation element, a main product display area, and a hidden "Product Not Found" message. The product display should contain placeholders for a large product image, name, price, and description. An order form must be present, containing a size selector and a quantity input.

Functionality:
The page must be fully dynamic. The script must read a product ID from the URL. It then finds the matching product in `products.js` and populates all elements with its data, including dynamically creating the options for the size selector. If no product is found, it must show the "Product Not Found" message. The order form must show a confirmation alert upon submission.

Design and Styling:
The design must match the mockup, featuring a two-column layout on desktop and a stacked layout on mobile. The product image should have a white background to stand out against the dark theme. Use the established style guide for all colors and fonts:
-   Main Background: `#181111`
-   Secondary Background: `#261c1c`
-   Interactive Elements: `#382929`
-   Primary Accent: `#e92932`
-   Primary Text: `#FFFFFF`
-   Secondary Text: `#b89d9f`
-   Fonts: 'Be Vietnam Pro', 'Noto Sans'."

**Anpassungen nach der Generierung:**
-   **Problem:** Der weisse Hintergrund der Produktbilder wirkte flach.
-   **Lösung (Manuell):** Ich habe der Bild-Wrapper-Klasse manuell einen leichten `box-shadow` hinzugefügt.

---

#### **4. Haupt-Prompt: Contact Page**

"Act as a senior frontend developer. Generate the complete code for a static Contact Page, based on the provided mockup. Organize the code into separate HTML, CSS, and JavaScript files.

Page Goal & Structure:
The page must provide users with a way to get in touch. It needs a global header and footer. The main content should have a title "Contact Us", a short intro text, an "Our Team" section, and a contact form. The team section must display a card for "Simon Deuber, Ergon Informatik AG".

Functionality:
The contact form must be functional. The script should validate that all fields are filled upon submission, prevent the page from reloading, and then display a confirmation alert.

Form Requirements:
The form needs labeled fields for Name, Email, a dropdown for Subject with predefined options ("Order Inquiry", "Product Question", etc.), and a textarea for the Message.

Design and Styling:
The layout should be clean, centered, and responsive, using the established style guide:
-   Main Background: `#181111`
-   Secondary Background: `#261c1c`
-   Interactive Elements: `#382929`
-   Primary Accent: `#e92932`
-   Primary Text: `#FFFFFF`
-   Secondary Text: `#b89d9f`
-   Fonts: 'Be Vietnam Pro', 'Noto Sans'."

**Anpassungen nach der Generierung:**
-   **Problem:** Das `select` Dropdown-Menü war nicht an das dunkle Design angepasst.
-   **Lösung (Manuell):** Ich habe benutzerdefinierte CSS-Regeln hinzugefügt, um dem `select`-Element das gleiche dunkle Aussehen wie den anderen Input-Feldern zu geben.

---

#### **5. Haupt-Prompt: Terms & Privacy Pages**

"Act as a senior frontend developer. Generate the complete code for two static legal pages: a **Terms of Service Page** and a **Privacy Policy Page**. Both pages should be based on the provided simple text-based mockup. Organize the code into separate HTML and CSS files for each page (e.g., `terms.html` and `terms.css`, `privacy.html` and `privacy.css`).

Page Goal & Structure:
Both pages must be simple, professional, and easy to read. They need to include the global header and footer for consistent navigation. The main content of each page should be a single column of text, broken into sections with clear headings. Generate placeholder text for the content of each section (e.g., for "Introduction", "Information We Collect", "Acceptance of Terms", etc.).

Functionality:
These pages are static and require no complex JavaScript, apart from the script that powers the global mobile menu, which should be included.

Design and Styling:
The design must be clean and prioritize readability. Use the established style guide for colors and fonts. The main content should be centered with a maximum width to ensure comfortable reading length. Headings for each section should use the primary accent color `#e92932` to break up the text. Links within the text should also be styled with the accent color. The layout must be responsive."

**Anpassungen nach der Generierung:**
-   **Problem:** Die KI hat für die Rechtstext-Seiten zu viel kreatives Layout hinzugefügt (Karten, Boxen etc.).
-   **Lösung (Manuell):** Ich habe das CSS stark vereinfacht und auf ein simples, einspaltiges Text-Layout mit Trennlinien zwischen den Abschnitten reduziert, um die Lesbarkeit zu maximieren.

## Fazit und Reflexion

Obwohl ich bereits vor diesem Projekt Erfahrungen mit KI-Tools gesammelt hatte, hat mir diese Arbeit ermöglicht, meinen Workflow gezielt zu professionalisieren. Ich habe mich intensiv damit beschäftigt, wie man die Zusammenarbeit mit einer KI verbessern kann. Das Ergebnis ist ein deutlich effizienterer Prozess.

Ich habe gelernt, die Stärken verschiedener Tools strategisch zu nutzen: **Google AI Studio** für die Erstellung der umfassenden Code-Basis und **Cursor** für die anschliessende, präzise Fehlerbehebung und Verfeinerung. Der grösste Fortschritt lag im "Prompt Engineering". Anstatt vage Anweisungen zu geben, habe ich gelernt, extrem detaillierte Prompts zu formulieren, die wie ein technisches Anforderungsdokument aufgebaut sind. Dies führte zu qualitativ hochwertigerem Code und sparte viele Korrekturschleifen.

Insgesamt konnte ich durch diesen verfeinerten KI-Einsatz:
-   schneller und strukturierter entwickeln
-   häufiger Varianten ausprobieren, da ich mehr Zeit hatte
-   Fehler effizienter beheben
-   mein Wissen deutlich vertiefen

Ich sehe KI nicht als Ersatz für eigenes Denken, sondern als ein mächtiges Werkzeug, das mir hilft, bessere Ergebnisse in kürzerer Zeit zu erzielen.

## Setup

Um das Projekt lokal auszuführen:
1.  Klone das Repository.
2.  Öffne eine der `.html`-Dateien (z.B. `explore.html`) in deinem Webbrowser oder verwende einen Live-Server.