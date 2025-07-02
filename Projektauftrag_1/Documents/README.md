# Webshop Projekt: Collab Crocs

Dies ist ein Webshop für exklusive Crocs-Kollaborationen, erstellt im Rahmen des Projektauftrags "Webshop mit KI-gestützter Webentwicklung".

**Live-Demo:** [Link zur veröffentlichten Webseite hier einfügen]
**Git-Repository:** [Link zum GitHub-Repository hier einfügen]

## Projektbeschreibung

Der "Collab Crocs" Webshop präsentiert eine kuratierte Auswahl an limitierten und exklusiven Crocs-Kollaborationen. Er wurde mit einem Fokus auf eine moderne "Dark Mode"-Ästhetik entwickelt und vollständig ohne CSS-Frameworks umgesetzt. Das Projekt nutzt reines JavaScript für alle dynamischen Funktionen wie Produktfilterung und -suche.

## Designprozess & Assets

Der Designprozess war ein mehrstufiger Weg von der Idee bis zum Code, um eine hochwertige und benutzerfreundliche Oberfläche zu schaffen.

-   **Wireframes (Miro):** [Link zum Miro Board](https://miro.com/welcomeonboard/S0JYUjA0dmszRUNtUmlkT2pwRENYeGtFeHVnMStXZHFBMEk0OEdPU3hvZ1A0UzlwS1pZUzNNUS9qa1VwTDM1ZXhNR2VOVkgyaWtsN0t1UW9IOWdyb1dHN2VnYXdrVXoxUG54UldHaXFTb3NwWlpOMlFEMjZuN1RweDBwWVV4dDdBS2NFMDFkcUNFSnM0d3FEN050ekl3PT0hdjE=?share_link_id=534214743377)
-   **Mockups (Figma):** [Link zum Figma Design](https://www.figma.com/design/1vWpDApHHGkOuF9Iku6xPI/M293-Projektauftrag?node-id=0-1&t=KZtsGPj0DVuU7qzX-1)

## Technologie-Stack

-   **HTML5, CSS3 (Grid & Flexbox), Vanilla JavaScript**

## Dokumentation des KI-Einsatzes

Künstliche Intelligenz, primär **Google AI Studio** und der **Cursor Editor**, war ein zentraler Partner im Entwicklungsprozess. Ich verfolgte eine klare Strategie: Grosse Aufgaben wurden mit umfangreichen Prompts an die KI delegiert, gefolgt von manuellen Tests, gezielten Korrektur-Prompts und eigenhändigen Verbesserungen.

### 1. Generierung der Grundstruktur

Zuerst nutzte ich Google AI Studio wegen des grossen Kontextfensters, um die Basis für jede Seite zu erstellen. Ich lieferte die gesamte Projektstruktur und meine Design-Mockups als Kontext.

-   **Beispiel eines Haupt-Prompts (für `index.html`):**
    > "Act as a senior full-stack web developer. Your task is to create the complete code for a product listing page for an e-commerce website called 'Collab Crocs'.
    >
    > **Context & Project Structure:** I'm providing you with the full project file structure, my Figma mockup visuals, and the `products.js` data file. The website uses a dark theme. The primary CSS file will be `style.css` for global styles and `index.css` for page-specific layouts. NO CSS FRAMEWORKS like Tailwind or Bootstrap are allowed. Use pure CSS with semantic class names, CSS Grid, and Flexbox. All dynamic content rendering, filtering, and searching must be handled with vanilla JavaScript in `index.js`.
    >
    > **Page: `index.html`**
    > Create the complete HTML, CSS, and JavaScript for this page.
    > 1.  **HTML (`index.html`):** Create the structure based on the mockup. Include a header, a filter bar section, a grid container for products (`id="productGrid"`), and a footer.
    > 2.  **CSS (`style.css` & `index.css`):** Generate the CSS. Global styles for the header, footer, and buttons go into `style.css`. Page-specific styles for the filter bar and the product grid go into `index.css`. The layout must be responsive for mobile, tablet, and desktop.
    > 3.  **JavaScript (`index.js`):** Write the script to dynamically fetch products from `products.js` and render them into `#productGrid`. Implement a filter logic that listens to clicks on the filter buttons and re-renders the grid. Also, implement a live search functionality tied to the search input fields.
    >
    > Ensure the code is clean, well-structured, and production-ready."

### 2. Manuelle Überarbeitung und KI-gestützte Korrekturen

Der von der KI generierte Code war eine solide Basis, erforderte aber gezielte Nacharbeit. Nach jeder Generierung führte ich manuelle Tests durch und identifizierte Fehler.

**Beispiele für aufgetretene Fehler und deren Behebung:**

-   **Fehler 1: Fehlerhaftes Grid-Layout auf mobilen Geräten.**
    -   **Problem:** Das von der KI erstellte Produkt-Grid brach auf kleinen Bildschirmen nicht korrekt in eine einzelne Spalte um.
    -   **Korrektur-Ansatz:** Ich isolierte den fehlerhaften CSS-Code und gab ihn an Cursor mit einem präzisen Prompt.
    -   **Beispiel-Prompt für Cursor:**
        > "Here is the CSS for my `.product-grid`. It's using `grid-template-columns: repeat(4, 1fr)`. This breaks on mobile. Fix it by using a mobile-first approach. It should be a single column by default, two columns on screens wider than 480px, and four columns on screens wider than 1024px."

-   **Fehler 2: Filter-Buttons blieben nicht aktiv.**
    -   **Problem:** Nach dem Klick auf einen Filter-Button wurde dieser nicht visuell als "aktiv" markiert. Die JavaScript-Logik zur Zuweisung der `.active`-Klasse fehlte.
    -   **Korrektur-Ansatz:** Manuelle Implementierung. Ich habe die `updateActiveButton`-Funktion in `index.js` selbst geschrieben, da dies schneller war, als es der KI zu erklären.

-   **Fehler 3: Langgezogene Bilder auf der Startseite.**
    -   **Problem:** Die Produktkarten im horizontalen Scroller auf `explore.html` wurden in die Länge gezogen, weil der Textname nicht umbrach.
    -   **Korrektur-Ansatz:** Diesen visuellen Glitch habe ich direkt im CSS korrigiert, indem ich `white-space: normal;` und `word-break: break-word;` zu den entsprechenden Klassen in `style.css` hinzugefügt habe.

Dieser iterative Prozess – **KI-Generierung → Manueller Test → Gezielte Korrektur (KI oder manuell)** – war der Schlüssel zum Erfolg. Durch die Kombination von gross angelegten KI-Anweisungen und präzisen, eigenständigen Anpassungen konnte ich sowohl die Entwicklungsgeschwindigkeit maximieren als auch eine hohe Code-Qualität sicherstellen.

## Setup

Um das Projekt lokal auszuführen:
1.  Klone das Repository: `git clone https://github.com/DEIN_BENUTZERNAME/DEIN_REPO.git`
3.  Öffne eine der `.html`-Dateien (z.B. `explore.html`) in deinem Webbrowser oder verwende einen LiveServer.