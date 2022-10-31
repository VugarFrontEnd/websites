const body = document.body;

/*************************************
  Click Event for entire body
*************************************/
body.addEventListener("click", (e) => {
  const target = e.target;
  const ul = document.querySelector(".unordered-list");

  if (target.matches("i.fa-bars")) {
    ul.style.transform = "scaleX(1)";
  } else if (
    target.matches("i.fa-xmark") ||
    (target.matches("label.label") && window.innerWidth < 930)
  ) {
    ul.style.transform = "scaleX(0)";
  }
});
/*************************************
  Click Event for entire body ends
*************************************/

/*************************************
  Toggling light / dark mode
*************************************/
const darkModeCheckbox = document.querySelector("input#checkbox");

darkModeCheckbox.addEventListener("change", () => {
  const darkModeText = document.querySelectorAll(".dark-mode-indicator");
  const partners = document.querySelectorAll("div.partners-container img");
  const heroPatternImage = document.querySelector("section#hero-page > img");
  const footerContainer = document.querySelector("footer.footer");
  const cards = document.querySelectorAll("div.cards .card");

  body.classList.toggle("body-dark");
  darkModeText.forEach((text) => {
    text.classList.toggle("dark-mode-text");
  });
  partners.forEach((partner) => {
    partner.classList.toggle("partners-dark-mode");
  });
  heroPatternImage.classList.toggle("hero-pattern-dark-mode");
  footerContainer.classList.toggle("footer-container-dark-mode");
  cards.forEach((card) => {
    card.classList.toggle("cards-dark-mode");
  });
});
/*************************************
  Toggling light / dark mode ends
*************************************/

/*************************************
  Email Input Validation
*************************************/
const newsletterEmailInput = document.querySelector("#newsletter-email");

newsletterEmailInput.addEventListener("keyup", emailInputValidation);

function emailInputValidation() {
  const value = newsletterEmailInput.value.trim();
  if (value.includes("@")) {
    newsletterEmailInput.setAttribute("class", "success");
  } else if (value.length < 1) {
    newsletterEmailInput.removeAttribute("class");
  } else {
    newsletterEmailInput.setAttribute("class", "error");
  }
}
/*************************************
  Email Input Validation ends
*************************************/

/*************************************
  Scrolling-up button
*************************************/
window.onscroll = function () {
  myFunction();
};
function myFunction() {
  const doc = document.documentElement;
  const scrollTopIcon = document.querySelector(".fa-arrow-up");
  if (doc.scrollTop > 500) {
    scrollTopIcon.style.opacity = "1";
  } else {
    scrollTopIcon.style.opacity = "0";
  }
}
/*************************************
  Scrolling-up button ends
*************************************/
