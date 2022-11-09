const body = document.body;
body.addEventListener("click", (e) => {
  const target = e.target;
  const navbar = document.querySelector(".navbar");
  if (target.matches(".fa-bars")) {
    navbar.classList.add("showNav");
  } else if (target.matches(".fa-times")) {
    navbar.classList.remove("showNav");
  }
});
