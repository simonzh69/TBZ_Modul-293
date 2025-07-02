document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("contactName").value;
    const email = document.getElementById("contactEmail").value;
    const subject = document.getElementById("contactSubject").value;
    const message = document.getElementById("contactMessage").value;

    if (name && email && subject && message) {
      alert(
        "Message sent! Thank you for contacting us, " +
          name +
          '. We will get back to you regarding: "' +
          subject +
          '".'
      );
      this.reset();
    } else {
      alert("Please fill out all fields.");
    }
  });

const mobileMenuButton = document.getElementById("mobileMenuButton");
const mobileMenu = document.getElementById("mobileMenu");
if (mobileMenuButton && mobileMenu) {
  mobileMenuButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
  });
}